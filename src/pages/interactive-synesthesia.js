import React from 'react'

import Header from '../components/general/header'
import Layout from '../components/general/layout'
import SEO from '../components/general/seo'
import Canvas from '../components/interactive/painter/canvas'

const InteractivePage = () => (
  <>
    <SEO title="hello" keywords-={['gatsby', 'application', 'react']} />
    <Layout>
      <a name="home" href="/#home"/>
      <Header displayType='post'/>
      <Canvas />
    </Layout>
  </>
)

export default InteractivePage
