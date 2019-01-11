import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
import muted from '../../../assets/general/audio-player/muted.svg'
import unmuted from '../../../assets/general/audio-player/unmuted.svg'

class CustomMuteUnmute extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isMuted !== media.isMuted
  }

  _handleMuteUnmute = () => {
    this.props.media.muteUnmute()
  };

  render() {
    const { className, style, media } = this.props
    return (
      <img
        src={media.isMuted ? muted : unmuted}
        className={className}
        style={style}
        onClick={this._handleMuteUnmute}
      ></img>
    )
  }
}

export default withMediaProps(CustomMuteUnmute)
