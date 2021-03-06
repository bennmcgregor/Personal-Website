import React, {Component} from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Photo from '../general/photo'
import Text from '../general/text'
import displayStyles from '../css/main-page/display.module.css'

//TODO add animations

class Display extends Component {
  constructor(props) {
    super(props);

    this.breakpoint = 600;

    this.state = {
      mwbIsHovering: 'none',
      citizenHacksIsHovering: 'none',
      musicColourIsHovering: 'none',
      catchAnalyzerIsHovering: 'none',
      sonataIsHovering: 'none',
      tedTalkIsHovering: 'none',
      soundCloudIsHovering: 'none',
      width: 900, //random value larger than breakpoint
    };
  }

  updateDimensions() {
    if (window.innerWidth < this.breakpoint) {
      this.setState({width: 300});
    } else {
      this.setState({width: 900});
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  handleMouseEnter(item) {
    this.setState({
      [item]: 'block',
    });
  }

  handleMouseLeave(item) {
    this.setState({
      [item]: 'none',
    });
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            mwb: allMarkdownRemark(filter: {frontmatter: {title: {eq: "Music Without Borders"}}}) {
              ...markdownInfo
            }
            mwbImage: file(relativePath: { eq: "work/mwb-logo-text.jpg" }) {
              ...imageInfo
            }
            citizenHacks: allMarkdownRemark(filter: {frontmatter: {title: {eq: "Citizen Hacks"}}}) {
              ...markdownInfo
            }
            musicColour: allMarkdownRemark(filter: {frontmatter: {title: {eq: "Synesthesia"}}}) {
              ...markdownInfo
            }
            sonataImage: file(relativePath: { eq: "work/sonata-preview.jpeg" }) {
              ...imageInfo
            }
            tedTalk: allMarkdownRemark(filter: {frontmatter: {title: {eq: "Is the World Growing Up?"}}}) {
              ...markdownInfo
            }
            tedTalkImage: file(relativePath: { eq: "work/earthrise-ted.jpg" }) {
              ...imageInfo
            }
            soundCloudImage: file(relativePath: { eq: "work/soundcloud.jpg" }) {
              ...imageInfo
            }
            catchAnalyzer: allMarkdownRemark(filter: {frontmatter: {title: {eq: "Catch Posture Analyzer"}}}) {
              ...markdownInfo
            }
            catchAnalyzerImage: file(relativePath: { eq: "work/catch-analyzer.jpg" }) {
              ...imageInfo
            }
          }
        `
      }
      render = {data => {
        if (this.state.width > this.breakpoint) {
          return (
            <div className={displayStyles.container}>
              <div className="right-margin"/>
              <div className={displayStyles.links}>
                <div>WORK</div>
                <br/>
                <Link
                  className="header-link"
                  to={data.catchAnalyzer.edges[0].node.fields.slug}
                >
                  <Text
                    input={data.catchAnalyzer.edges[0].node.frontmatter.title}
                    hoverArg='catchAnalyzerIsHovering'
                    handleMouseEnter={this.handleMouseEnter.bind(this)}
                    handleMouseLeave={this.handleMouseLeave.bind(this)}
                  />
                </Link>
                <br/>
                <Link
                  to={data.citizenHacks.edges[0].node.fields.slug}
                  className="header-link"
                >
                  <Text
                    input={data.citizenHacks.edges[0].node.frontmatter.title}
                    hoverArg='citizenHacksIsHovering'
                    handleMouseEnter={this.handleMouseEnter.bind(this)}
                    handleMouseLeave={this.handleMouseLeave.bind(this)}
                  />
                </Link>
                <br/>
                <Link
                  className="header-link"
                  to={data.musicColour.edges[0].node.fields.slug}
                >
                  <Text
                    input={data.musicColour.edges[0].node.frontmatter.title}
                    hoverArg='musicColourIsHovering'
                    handleMouseEnter={this.handleMouseEnter.bind(this)}
                    handleMouseLeave={this.handleMouseLeave.bind(this)}
                  />
                </Link>
                <br/>
                <Link
                  to="/sonata"
                  className="header-link"
                >
                  <Text
                    input="Piano Sonata"
                    hoverArg='sonataIsHovering'
                    handleMouseEnter={this.handleMouseEnter.bind(this)}
                    handleMouseLeave={this.handleMouseLeave.bind(this)}
                  />
                </Link>
                <br/>
                <Link
                  to={data.mwb.edges[0].node.fields.slug}
                  className="header-link"
                >
                  <Text
                    input={data.mwb.edges[0].node.frontmatter.title}
                    hoverArg='mwbIsHovering'
                    handleMouseEnter={this.handleMouseEnter.bind(this)}
                    handleMouseLeave={this.handleMouseLeave.bind(this)}
                  />
                </Link>
                <br/>
                <Link
                  to={data.tedTalk.edges[0].node.fields.slug}
                  className="header-link"
                >
                  <Text
                    input={data.tedTalk.edges[0].node.frontmatter.title}
                    hoverArg='tedTalkIsHovering'
                    handleMouseEnter={this.handleMouseEnter.bind(this)}
                    handleMouseLeave={this.handleMouseLeave.bind(this)}
                  />
                </Link>
                <br/>
                <a href="https://soundcloud.com/bennmcgregor" className="header-link">
                  <Text
                    input="Recordings"
                    hoverArg='soundCloudIsHovering'
                    handleMouseEnter={this.handleMouseEnter.bind(this)}
                    handleMouseLeave={this.handleMouseLeave.bind(this)}
                  />
                </a>
              </div>
              <div className={displayStyles.centerMargin}/>
              <div className={displayStyles.images}>
                <Photo
                  imagePath={data.catchAnalyzerImage.childImageSharp.fluid}
                  styles={{display: this.state.catchAnalyzerIsHovering, margin: '0 auto'}}
                />
                <div className={displayStyles.description} style={{
                  display: this.state.catchAnalyzerIsHovering,
                  top: '1rem',
                }}>
                  <i>{data.catchAnalyzer.edges[0].node.frontmatter.description}</i>
                </div>
                <Photo
                  imagePath='static/citizen-hacks-fast.gif'
                  styles={{width: '100%', display: this.state.citizenHacksIsHovering, margin: '0 auto'}}
                />
                <div className={displayStyles.description} style={{
                  display: this.state.citizenHacksIsHovering,
                }}>
                  <i>{data.citizenHacks.edges[0].node.frontmatter.description}</i>
                </div>
                <video autoplay="autoplay" loop style={{width: '100%', display: this.state.musicColourIsHovering, margin: '0 auto'}}>
                  <source src="static/synesthesia-demo.mp4" type="video/mp4"/>
                  <source src="static/synesthesia-demo.ogg" type="video/ogg"/>
                  Your browser does not support the video tag.
                </video>
                <div className={displayStyles.description} style={{
                  display: this.state.musicColourIsHovering,
                }}>
                  <i>{data.musicColour.edges[0].node.frontmatter.description}</i>
                </div>
                <Photo
                  imagePath={data.sonataImage.childImageSharp.fluid}
                  styles={{display: this.state.sonataIsHovering, margin: '0 auto'}}
                />
                <div className={displayStyles.description} style={{
                  display: this.state.sonataIsHovering,
                }}>
                  <i>The first movement of a sonata for solo piano</i>
                </div>
                <Photo
                  imagePath={data.mwbImage.childImageSharp.fluid}
                  styles={{display: this.state.mwbIsHovering, margin: '0 auto'}}
                />
                <div className={displayStyles.description} style={{
                  display: this.state.mwbIsHovering,
                  top: '1rem',
                }}>
                  <i>{data.mwb.edges[0].node.frontmatter.description}</i>
                </div>
                <Photo
                  imagePath={data.tedTalkImage.childImageSharp.fluid}
                  styles={{display: this.state.tedTalkIsHovering, margin: '0 auto'}}
                />
                <div className={displayStyles.description} style={{
                  display: this.state.tedTalkIsHovering,
                }}>
                  <i>{data.tedTalk.edges[0].node.frontmatter.description}</i>
                </div>
                <Photo
                  imagePath={data.soundCloudImage.childImageSharp.fluid}
                  styles={{display: this.state.soundCloudIsHovering, margin: '0 auto'}}
                />
                <div className={displayStyles.description} style={{
                  display: this.state.soundCloudIsHovering,
                }}>
                  <i>My SoundCloud featuring some of my music</i>
                </div>
              </div>
              <div className={displayStyles.leftMargin}/>
            </div>
          );
        }
        return (
          <div className={displayStyles.container}>
            <div className="right-margin"/>
            <div className={displayStyles.links}>
              <div className={displayStyles.mobileText}>
                <div>WORK</div>
                <br/>
                <Link
                  to={data.catchAnalyzer.edges[0].node.fields.slug}
                  className="header-link"
                >
                  {data.catchAnalyzer.edges[0].node.frontmatter.title}<br/>
                  <i>{data.catchAnalyzer.edges[0].node.frontmatter.description}</i>
                </Link>
                <br/>
                <br/>
                <Link
                  to={data.citizenHacks.edges[0].node.fields.slug}
                  className="header-link"
                >
                  {data.citizenHacks.edges[0].node.frontmatter.title}<br/>
                  <i>{data.citizenHacks.edges[0].node.frontmatter.description}</i>
                </Link>
                <br/>
                <br/>
                <Link
                  className="header-link"
                  to={data.musicColour.edges[0].node.fields.slug}
                >
                  {data.musicColour.edges[0].node.frontmatter.title}<br/>
                  <i>{data.musicColour.edges[0].node.frontmatter.description}</i>
                </Link>
                <br/>
                <br/>
                <Link
                  to="/sonata"
                  className="header-link"
                >
                  Piano Sonata<br/>
                  <i>The first movement of a sonata for solo piano</i>
                </Link>
                <br/>
                <br/>
                <Link
                  to={data.mwb.edges[0].node.fields.slug}
                  className="header-link"
                >
                  {data.mwb.edges[0].node.frontmatter.title}<br/>
                  <i>{data.mwb.edges[0].node.frontmatter.description}</i>
                </Link>
                <br/>
                <br/>
                <Link
                  to={data.tedTalk.edges[0].node.fields.slug}
                  className="header-link"
                >
                  {data.tedTalk.edges[0].node.frontmatter.title}<br/>
                  <i>{data.tedTalk.edges[0].node.frontmatter.description}</i>
                </Link>
                <br/>
                <br/>
                <a href="https://soundcloud.com/bennmcgregor" className="header-link">
                  Recordings<br/>
                  <i>My SoundCloud featuring some of my music</i>
                </a>
              </div>
            </div>
            <div className={displayStyles.leftMargin}/>
          </div>
        );
      }}
    />);
  }
}


export const markdownInfo = graphql`
  fragment markdownInfo on MarkdownRemarkConnection {
    edges {
      node {
        frontmatter {
          title
          image
          description
        }
        fields {
          slug
        }
      }
    }
  }
`

export const imageInfo = graphql`
  fragment imageInfo on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default Display
