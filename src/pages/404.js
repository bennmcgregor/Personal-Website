import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/general/layout'
import styles from '../components/css/404.module.css'
import SEO from '../components/general/seo'

function randomIndex(min, max) {
  return Math.floor(Math.random()*(max-min)+min);
}

const NotFoundPage = ({data}) => {
  var pages = data.allSitePage.edges;
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className={styles.container}>
        <div className="right-margin"/>
        <div className={styles.text}>
          <div>404 ERROR</div>
          <br/>
          The link provided doesn't exist. Visit a <Link to={pages[randomIndex(0, pages.length)].node.path}>
          random page</Link>.
          Or go <Link to="/">home</Link>.
        </div>
        <div className={styles.leftMargin}/>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allSitePage(filter: {path: {ne: "/404.html"}}) {
      edges {
        node {
          path
        }
      }
    }
  }
`

export default NotFoundPage
