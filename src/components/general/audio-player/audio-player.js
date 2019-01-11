import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
import audioPlayerStyles from '../../css/general/audio-player.module.css'
import CustomPlayPause from './custom-play-pause.js'
const { SeekBar, CurrentTime } = controls

class AudioPlayer extends Component {
  render() {
    if (this.props.show === 'carousel') {
      return (
        <Media>
          <div className={`media ${audioPlayerStyles.mediaContainer}`}>
            <Player src={this.props.file} autoPlay="false" />
            <CustomPlayPause className={audioPlayerStyles.controlButton}/>
            <div className={audioPlayerStyles.playing}>
              <CurrentTime className={audioPlayerStyles.time}/>
              <SeekBar className={audioPlayerStyles.slider}/>
            </div>
          </div>
        </Media>
      );
    } return null;
  }
}

export default AudioPlayer


/*import React, { Component } from 'react'
import FilePlayer from 'react-player/lib/players/FilePlayer'
import audioPlayerStyles from './audio-player.module.css'

class AudioPlayer extends Component {
  render() {
    if (this.props.show === 'carousel') {
      return (
        <div className={audioPlayerStyles.playerWrapper}>
          <FilePlayer
            className={audioPlayerStyles.reactPlayer}
            url={this.props.file}
            width='100%'
            height='100%'
            playing='true'
            controls='true'
          />
        </div>
      );
    } return null;
  }
}

export default AudioPlayer*/
