import React from 'react'
import aboutStyles from '../css/main-page/about.module.css'

const About = () => (
  <div className={aboutStyles.container}>
    <div className="right-margin"/>
    <div className={aboutStyles.text}>
      <div>ABOUT</div>
      <br/>
      I love creating. I love it because it brings something new into the world. It also connects people—the creative
      process is always collaborative. Even when I’m working on a project alone, what I create builds on the knowledge
      and work of others before me. When I work with others, we tap into the potential of unity in diversity. The greater
      the scale of collaboration, the greater the creative potential that we can harness.
      <br/><br/>
      Connect with me! Let’s create together.
      <br/><br/>
      <a href="mailto:benn@bennmcgregor.com" alt="my email" style={{color: 'white',}}>benn@bennmcgregor.com</a>
    </div>
    <div className={aboutStyles.leftMargin}/>
  </div>
)

export default About
