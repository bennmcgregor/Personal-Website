import React from "react"
import aboutStyles from '../../components/css/main-page/about.module.css'
import Layout from '../../components/general/layout'
import Header from '../../components/general/header'
import SEO from '../../components/general/seo'


const About = () => (
  <Layout>
    <SEO title="about" keywords-={['gatsby', 'application', 'react']}/>
    <Header displayType='blog'/>
    <div className={aboutStyles.container} style={{background: "#ffffff"}}>
      <div className="right-margin"/>
      <div className={aboutStyles.text} style={{color: "#222222"}}>
        <div>PLACEHOLDER</div>
        <br/>
        PLACEHOLDER
        <br/><br/>
      </div>
      <div className={aboutStyles.leftMargin}/>
    </div>
  </Layout>
)

export default About
