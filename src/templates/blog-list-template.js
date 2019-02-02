import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/general/layout"
import SEO from '../components/general/seo'
import Post from "../components/blog/post"
import Header from "../components/general/header"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <SEO />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return <div key={node.fields.slug}>{title}</div>
        })}
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/blog/.*.md$/"}}
      sort: { fields: [frontmatter___title], order: DESC }
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
          }
        }
      }
    }
  }
`
