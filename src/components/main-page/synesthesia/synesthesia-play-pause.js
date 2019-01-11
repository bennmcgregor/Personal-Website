import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
import play from '../../../assets/general/audio-player/play.svg'
import stop from '../../../assets/synesthesia/stop.svg'

//This component restarts the music if stopped.
class PlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying
  }

  _handlePlayPause = () => {
    if (this.props.media.isPlaying) {
      this.props.media.stop();
    } else {
      this.props.media.play();
    }
  }

  render() {
    const { className, style, media } = this.props
    return (
      <img
        src={media.isPlaying ? stop : play}
        className={className}
        style={style}
        onClick={this._handlePlayPause}
        alt="play/stop button"
      ></img>
    )
  }
}

export default withMediaProps(PlayPause)
