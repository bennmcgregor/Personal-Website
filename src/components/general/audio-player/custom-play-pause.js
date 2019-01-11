import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
import play from '../../../assets/general/audio-player/play.svg'
import pause from '../../../assets/general/audio-player/pause.svg'

class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying
  }

  _handlePlayPause = () => {
    this.props.media.playPause()
  }

  render() {
    const { className, style, media } = this.props
    return (
      <img
        src={media.isPlaying ? pause : play}
        className={className}
        style={style}
        onClick={this._handlePlayPause}
        alt="play/pause button"
      ></img>
    )
  }
}

export default withMediaProps(CustomPlayPause)
