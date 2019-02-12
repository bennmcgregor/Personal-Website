import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/general/layout"
import SEO from '../components/general/seo'
import Post from "../components/blog/post"
import Header from "../components/general/header"
import styles from "../components/css/blog/blog-list-template.module.css"

export default class BlogList extends React.Component {
  render() {
    console.log(this.props.data);
    const posts = this.props.data.allMarkdownRemark.edges
    const img = this.props.data.image.edges
    return (
      <Layout>
        <SEO title="blog" keywords-={['gatsby', 'application', 'react']}/>
        <Header displayType='blog'/>
        { posts.map(({ node }) => {
          const img_name = node.frontmatter.image.split('/')[1]
          //gets the index of the element in the Gatsby Image array that corresponds with the title of the post.
          const index = img.findIndex(img => img.node.childImageSharp.fluid.originalName === img_name);
          return (
            <div key={node.frontmatter.title} className={styles.container}>
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
  }
`
