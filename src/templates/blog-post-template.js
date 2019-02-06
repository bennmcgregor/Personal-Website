import React from "react"
import { graphql } from "gatsby"

import SEO from '../components/general/seo'
import Layout from "../components/general/layout"
import Header from "../components/general/header"
import Photo from '../components/general/photo'
import getDateString from '../components/blog/helper'
import templateStyles from '../components/css/description-template.module.css'

export default ({ data }) => {
  const post = data.markdownRemark;
  const img = data.image;

  return (
    <Layout>
      <Header displayType='blog'/>
      <SEO title={post.frontmatter.title} keywords-={['gatsby', 'application', 'react']}/>
      <div className={templateStyles.container}>
        <div className="right-margin"/>
        <div className={templateStyles.content}>
          <p><b>{post.frontmatter.title}</b><br/>
          {getDateString(post.frontmatter.date)}<br/><br/>
          {post.frontmatter.description}<br/><br/></p>
          <Photo imagePath={img.childImageSharp.fluid}/>
          <div dangerouslySetInnerHTML={{ __html: post.html }}/>
        </div>
        <div className={templateStyles.leftMargin}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $img_path: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
        description
        date
      }
    }
    image: file(relativePath: {eq: $img_path}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
