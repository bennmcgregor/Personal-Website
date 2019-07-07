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
        <div>ABOUT</div>
        <br/>
        This is a place for sharing interesting ideas, beautiful things, new creations, and anything else compelling
        that I come across. Come on in to explore, make connections, feel, and wonder with me!
        <br/><br/>
        If you'd like to share something, say hi, or ask a question, email <a href="mailto:benn@bennmcgregor.com">
        benn@bennmcgregor.com</a>.
      </div>
      <div className={aboutStyles.leftMargin}/>
    </div>
  </Layout>
)

export default About
