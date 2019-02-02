import React from "react"
import { graphql } from "gatsby"

import SEO from '../components/general/seo'
import Layout from "../components/general/layout"
import Header from "../components/general/header"
import templateStyles from '../components/css/description-template.module.css'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} keywords-={['gatsby', 'application', 'react']}/>
      <div className={templateStyles.container}>
        <div className="right-margin"/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} className={templateStyles.content}/>
        <div className={templateStyles.leftMargin}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
