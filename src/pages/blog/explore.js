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
        <div>You've discovered a secret page! Here's a piece of delightful music to celebrate!</div>
        <br/><br/>
        <div style={{position: "relative", paddingBottom: "56.25%", paddingTop: "30px", height: "0", overflow: "hidden"}}>
          <iframe style={{position:"absolute", top: "0", left: "0", width: "100%", height: "100%"}} src="https://www.youtube.com/embed/Lv5u0MfoCkE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        (This page is actually a work in progress, but what fun is that?)
        <br/><br/>
      </div>
      <div className={aboutStyles.leftMargin}/>
    </div>
  </Layout>
)

export default About
