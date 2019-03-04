const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        work: allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/work/.*.md$/"}},
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        blog: allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/blog/.*.md$/"}},
          sort: {fields: [frontmatter___date], order: DESC}
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                image
              }
            }
            previous {
              fields {
                slug
              }
            }
            next {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      //build an array of nodes from only blog posts
      var blog_images = [];
      result.data.work.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/description-template.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        });
      })
      result.data.blog.edges.forEach((element) => {
        blog_images.push(element.node.frontmatter.image);
        var prevs = null;
        var nexts = null;
        if (element.previous !== null) {
          prevs = element.previous.fields.slug;
        }
        if (element.next !== null) {
          nexts = element.next.fields.slug;
        }
        createPage({
          path: element.node.fields.slug,
          component: path.resolve(`./src/templates/blog-post-template.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            post_slug: element.node.fields.slug,
            img_path: element.node.frontmatter.image,
            prev_slug: prevs,
            next_slug: nexts,
          },
        });
      })
      //Create blog-list pages
      const postsPerPage = 2
      const numPages = Math.ceil(blog_images.length / postsPerPage)
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog` : `/blog/${i + 1}`,
          component: path.resolve("./src/templates/blog-list-template.js"),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            img_paths: blog_images,
          },
        })
      })
      resolve()
    })
  })
}

/*
{
  work: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/work/.*\\.md$/"}}) {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
?? Doesn't work...
*/
