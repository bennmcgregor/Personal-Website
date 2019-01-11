import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/general/layout'
import SEO from '../components/general/seo'
import Carousel from '../components/main-page/sonata/carousel'
import Opening from '../components/main-page/sonata/opening'
import Menu from '../components/main-page/sonata/menu'

class SonataPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageDisplay: 'carousel',
      showOpening: false,
    };
  }

  toggleNotes(button) {
    if (this.state.pageDisplay === 'opening' || this.state.showOpening) {
      this.setState({
        pageDisplay: 'carousel',
        showOpening: false,
      });
    } else {
      this.setState({
        showOpening: true,
      });
    }
  }

  render() {
    return (
        <StaticQuery
          query={graphql`
            query {
              allFile(filter: {relativeDirectory: {eq: "sonata"}, ext: {eq: ".jpeg"}}, sort: {fields: [name], order: ASC}) {
                edges {
                  node {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid_noBase64
                      }
                    }
                  }
                }
              }
              mp3: file(relativePath: {eq: "sonata/sonata.mp3"}) {
                publicURL
              }
              ogg: file(relativePath: {eq: "sonata/sonata.ogg"}) {
                publicURL
              }
            }
          `}
          render = {data => (
            <Layout>
              <SEO title="Sonata" keywords-={['gatsby', 'application', 'react']}/>
              <Opening pageDisplay={this.state.pageDisplay} showOpening={this.state.showOpening} toggleNotes={this.toggleNotes.bind(this)}/>
              <Menu display={this.state.pageDisplay} url={data.mp3.publicURL} toggleNotes={this.toggleNotes.bind(this)}/>
              <Carousel imgUrls={data.allFile.edges.map(({node}) => node.childImageSharp.fluid)}/>
            </Layout>
          )
        }
      />
    )
  }
}

export default SonataPage
