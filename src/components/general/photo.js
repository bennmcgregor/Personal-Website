import React, {Component} from "react"
import Img from 'gatsby-image'

//robust photo component that uses gatsby-image when possible

class Photo extends Component {
  render() {
    if (typeof this.props.imagePath === 'string') {
      return (
        <img src={this.props.imagePath} alt="" style={this.props.styles ? this.props.styles : null}></img>
      );
    }
    else return (
      <Img fluid={this.props.imagePath} style={this.props.styles ? this.props.styles : null}/>
    );
  }
}

export default Photo
