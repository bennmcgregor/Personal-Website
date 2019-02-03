import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/general/layout"
import SEO from '../components/general/seo'
import Post from "../components/blog/post"
import Header from "../components/general/header"
import styles from "../components/css/blog/blog-list-template.module.css"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <SEO title="blog" keywords-={['gatsby', 'application', 'react']}/>
        <Header displayType='blog'/>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div className={styles.container}>
                <Post title={node.frontmatter.title} slug={node.fields.slug}/>
              </div>
            );
          })}
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
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
  }
`
