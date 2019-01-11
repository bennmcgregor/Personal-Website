import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

const Gallery = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                image
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  }
  render={data => (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
              {node.frontmatter.title}{" "}
          </Link>
        </div>
      ))}
    </div>
    )}
  />
)

export default Gallery
