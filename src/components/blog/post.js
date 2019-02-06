import React, {Component} from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Photo from '../general/photo'
import Text from '../general/text'
import getDateString from './helper'
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
            <Link
              to={this.props.slug}
              className="header-link"
            >
              <p><b>{this.props.title}</b><br/>
              {getDateString(this.props.date)}<br/><br/>
              {this.props.description}<br/><br/></p>
            </Link>
            <Photo imagePath={this.props.image}/>
          </div>
          <div className={styles.leftMargin}/>
        </>
      );
    }
  }
}

export default Post
