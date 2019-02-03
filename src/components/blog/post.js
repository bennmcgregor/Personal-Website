import React, {Component} from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Photo from '../general/photo'
import Text from '../general/text'
import styles from '../css/blog/post.module.css'

class Post extends Component {
  constructor(props) {
    super(props);

    this.breakpoint = 900;

    this.state = {
      width: 1200, //random value larger than breakpoint
    }
  }

  render () {
    if (this.state.width > this.breakpoint) {
      return (
        <>
          <div className="right-margin"/>
          <div className={styles.content}>
            {this.props.title}
          </div>
          <div className={styles.leftMargin}/>
        </>
      );
    }
  }
}

export default Post
