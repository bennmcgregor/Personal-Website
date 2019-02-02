import React, {Component} from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Photo from '../general/photo'
import Text from '../general/text'
import styles from '../css/blog/posts.module.css'

class Post extends Component {
  constructor(props) {
    super(props);

    this.breakpoint = 900;

    this.state = {
      display: 'default', //the type of display. Options are 'default', 'random'
      width: 1200, //random value larger than breakpoint
    }
  }

  render () {
    if (this.state === 'default') {
      return null;
    }
  }
}

export default Post
