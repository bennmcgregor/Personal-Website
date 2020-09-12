import React, { Component } from 'react'
import { motion } from 'framer-motion'

import Paint from './paint'
import cStyles from '../../css/main-page/interactive/canvas.module.css'

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.canvasBorder = React.createRef();

    this.state = {
      //loading...
    }
  }

  componentDidMount() {
    //fetch the data for the most recent 20 pages from the database
    //set the state to display the most recent page (an array of props to the paint object)
  }

  render () {
    return (
      <div className={cStyles.container} ref={this.canvasBorder} >
        {/* the props passed to this are the position data, initial animation state, animation transition data */}
        <Paint container={this.canvasBorder}/>
      </div>
    );
  }
}

export default Canvas
