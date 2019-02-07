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
        I love creating. I love it because it brings something new into the world. It also connects people—the creative
        process is always collaborative. Even when I’m working on a project alone, what I create builds on the knowledge
        and work of others before me. When I work with others, we tap into the potential of unity in diversity. The greater
        the scale of collaboration, the greater the creative potential that we can harness.
        <br/><br/>
        Connect with me! Let’s create together.
      </div>
      <div className={aboutStyles.leftMargin}/>
    </div>
  </Layout>
)

export default About
