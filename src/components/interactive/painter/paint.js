import React, {Component} from 'react'
import { motion } from 'framer-motion'

import pStyles from '../../css/main-page/interactive/paint.module.css'

class Paint extends Component {
  constructor(props) {
    super(props);

  }

  componentWillUnmount() {
    //upsert the saved element/position as a percentage (via elem.getBoundingClientRect) to the database
  }

  render () {
    return (
      <motion.div 
        className={pStyles.note}
        drag
        dragConstraints={this.props.container}
        dragElastic={0.05}
        dragMomentum={false}
      />
    );
  }
}

export default Paint
