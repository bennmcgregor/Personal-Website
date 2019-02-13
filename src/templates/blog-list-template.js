import React from "react"
import { graphql } from "gatsby"
import { Location } from '@reach/router'

import Layout from "../components/general/layout"
import SEO from '../components/general/seo'
import Post from "../components/blog/post"
import Header from "../components/general/header"
import Arrows from '../components/blog/arrows'
import styles from "../components/css/blog/blog-list-template.module.css"

export default class BlogList extends React.Component {
  render() {
    console.log(this.props.data);
    const posts = this.props.data.allMarkdownRemark.edges;
    const img = this.props.data.image.edges;
    var blogPages = null;
    if (this.props.data.blogPages !== null) blogPages = this.props.data.blogPages.edges;
    return (
      <Layout>
        <SEO title="blog" keywords-={['gatsby', 'application', 'react']}/>
        <Header displayType='blog'/>
        <div className={styles.container}>
          <div className="right-margin"/>
          <div className={styles.content}>
            { posts.map(({ node }) => {
              const img_name = node.frontmatter.image.split('/')[1]
              //gets the index of the element in the Gatsby Image array that corresponds with the title of the post.
              const index = img.findIndex(img => img.node.childImageSharp.fluid.originalName === img_name);
              return (
                <div key={node.frontmatter.title}>
                  <Post
                    title={node.frontmatter.title}
                    slug={node.fields.slug}
                    image={img[index].node.childImageSharp.fluid}
                    description={node.frontmatter.description}
                    date={node.frontmatter.date}
                  />
                </div>
              );
            })}
            <Location>
              {({ location }) => {
                var splittedStr = location.pathname.split("/")
                var currentIndex;
                for (var i = splittedStr.length-1; i >= 0; i--) {
                  if (splittedStr[i] != "") {
                    currentIndex = splittedStr[i];
                    break;
                  }
                }
                var hasPrevious, hasNext, previousSlug, nextSlug;
                //setting Older buttons:
                hasPrevious = false;
                if (currentIndex !== "blog") {
                  hasPrevious = true;
                  if (currentIndex === "2") previousSlug = "/blog/";
                  else previousSlug = "/blog/" + (parseInt(currentIndex, 10)-1).toString();
                }
                //setting Newer buttons:
                if (currentIndex === "blog") nextSlug = "/blog/2";
                else nextSlug = "/blog/" + (parseInt(currentIndex, 10)+1).toString()
                hasNext = false;
                if (blogPages !== null) {
                  blogPages.forEach(({node}) => {
                    if (node.path === nextSlug) hasNext = true;
                  });
                }
                return (
                  <div className={styles.arrowContainer}>
                    <div className="right-margin"/>
                    <Arrows
                      hasPrevious={hasPrevious}
                      hasNext={hasNext}
                      previousTitle={hasPrevious ? 'Newer' : ' '}
                      previousSlug={hasPrevious ? previousSlug : ''}
                      nextTitle={hasNext ? 'Older' : ' '}
                      nextSlug={hasNext ? nextSlug : ''}
                    />
                    <div className={styles.leftMargin}/>
                  </div>
                );
              }}
            </Location>
          </div>
          <div className={styles.leftMargin}/>
        </div>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!, $img_path: [String!]!) {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/blog/.*.md$/"}}
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            image
            description
            date
          }
        }
      }
    }
    image: allFile(filter: {relativePath: {in: $img_path}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    blogPages: allSitePage (filter: {path: {regex: "/blog.*[0-9]$/"}}) {
      edges {
        node {
          path
        }
      }
    }
  }
`
