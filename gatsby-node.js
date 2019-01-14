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
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields.slug.startsWith("/work")) {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/description-template.js`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          });
        } else if (node.fields.slug.startsWith("/blog")) {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-template.js`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          });
        }  
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
