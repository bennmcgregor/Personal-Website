import React from 'react'

import Header from '../components/general/header'
import Layout from '../components/general/layout'
import SEO from '../components/general/seo'
import Synesthesia from '../components/main-page/synesthesia/synesthesia'
import Display from '../components/main-page/display'
import About from '../components/main-page/about'

const IndexPage = () => (
  <>
    <SEO title="hello" keywords-={['gatsby', 'application', 'react']} />
    <Layout>
      <a name="home" id="home"/>
      <Header displayType='main'/>
      <Synesthesia />
      <a name="work" id="work"/>
      <Display />
      <a name="about" id="about"/>
      <About />
    </Layout>
  </>
)

export default IndexPage
