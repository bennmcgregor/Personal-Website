import React from "react"
import { graphql } from "gatsby"

import SEO from '../components/general/seo'
import Layout from "../components/general/layout"
import Header from "../components/general/header"
import Photo from '../components/general/photo'
import Arrows from '../components/blog/arrows'
import getDateString from '../components/blog/helper'
import templateStyles from '../components/css/description-template.module.css'

export default ({ data }) => {
  const post = data.post;
  const previous = data.previous;
  const next = data.next;
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
          <Arrows
            hasPrevious={previous !== null}
            hasNext={next !== null}
            previousTitle={previous !== null ? previous.frontmatter.title : ' '}
            previousSlug={previous !== null ? previous.fields.slug : null}
            nextTitle={next !== null ? next.frontmatter.title : ' '}
            nextSlug={next !== null ? next.fields.slug : null}
          />
        </div>
        <div className={templateStyles.leftMargin}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($post_slug: String!, $prev_slug: String, $next_slug: String, $img_path: String!) {
    post: markdownRemark(fields: { slug: { eq: $post_slug } }) {
      html
      frontmatter {
        title
        image
        description
        date
      }
    }
    previous: markdownRemark(fields: {slug: {eq: $prev_slug}}) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(fields: {slug: {eq: $next_slug}}) {
      fields {
        slug
      }
      frontmatter {
        title
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
