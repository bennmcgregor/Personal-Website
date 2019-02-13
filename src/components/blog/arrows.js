import React from "react"
import { Link } from "gatsby"

import styles from '../css/blog/arrows.module.css'

const Arrows = (props) => (
  <div className={styles.postArrows}>
    <Link
      className={`${styles.arrowContainer} header-link`}
      to={props.previousSlug}
    >
      <div
        className={styles.arrow}
        style={{display: props.hasPrevious ? 'block' : 'none'}}
      >
        &larr;&nbsp;
      </div>
      <div className={styles.arrowText} id={styles.justifyLeft}>
        {props.previousTitle}
      </div>
    </Link>
    <Link
      className={`${styles.arrowContainer} header-link`}
      to={props.nextSlug}
    >
      <div className={styles.arrowText} id={styles.justifyRight}>
        {props.nextTitle}
      </div>
      <div
        className={styles.arrow}
        style={{display: props.hasNext ? 'block' : 'none'}}
      >
        &nbsp;&rarr;
      </div>
    </Link>
  </div>
);

export default Arrows
