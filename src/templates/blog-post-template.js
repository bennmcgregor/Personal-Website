import React from "react"
import { graphql, Link } from "gatsby"

import SEO from '../components/general/seo'
import Layout from "../components/general/layout"
import Header from "../components/general/header"
import Photo from '../components/general/photo'
import getDateString from '../components/blog/helper'
import templateStyles from '../components/css/description-template.module.css'
import styles from '../components/css/blog-post-template.module.css'

export default ({ data }) => {
  const post = data.post;
  const previous = data.previous;
  const next = data.next;
  const img = data.image;
  console.log('previous: ', previous);
  console.log('next: ', next);

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
          <div className={styles.postArrows}>
            <Link
              className={`${styles.arrowContainer} header-link`}
              to={previous !== null ? previous.fields.slug : null}
            >
              <div
                className={styles.arrow}
                style={{display: previous !== null ? 'block' : 'none'}}
              >
                &larr;&nbsp;
              </div>
              <div className={styles.arrowText} id={styles.justifyLeft}>
                {previous !== null ? previous.frontmatter.title : ' '}
              </div>
            </Link>
            <Link
              className={`${styles.arrowContainer} header-link`}
              to={next !== null ? next.fields.slug : null}
            >
              <div className={styles.arrowText} id={styles.justifyRight}>
                {next !== null ? next.frontmatter.title : ' '}
              </div>
              <div
                className={styles.arrow}
                style={{display: next !== null ? 'block' : 'none'}}
              >
                &nbsp;&rarr;
              </div>
            </Link>
          </div>
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
