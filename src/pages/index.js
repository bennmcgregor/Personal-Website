import React from 'react'

import Header from '../components/general/header'
import Layout from '../components/general/layout'
import SEO from '../components/general/seo'
import Synesthesia from '../components/main-page/synesthesia/synesthesia'
import Display from '../components/main-page/display'
import About from '../components/main-page/about'

const IndexPage = ({data}) => (
  <Layout>
    <a name="home" href="/#home"/>
    <Header displayType='main'/>
    <Synesthesia />
    <SEO title="hello" keywords-={['gatsby', 'application', 'react']} />
    <a name="work" href="/#work"/>
    <Display />
    <a name="about" href="/#about"/>
    <About />
  </Layout>
)

export default IndexPage
