import React, {Component} from 'react'
import posed from 'react-pose'

import sStyles from '../../css/main-page/synesthesia.module.css'
import {getStates, getPoseProps, audioFiles} from './synesthesia-helper'
import { Media, Player } from 'react-media-player'
import PlayPause from './synesthesia-play-pause'
var music = require('./input.js');

var rootProps = getPoseProps(music, 'root');
var bassProps = getPoseProps(music, 'bass');
var fifthProps = getPoseProps(music, 'fifth');
var highestProps = getPoseProps(music, 'highest');
var remainingProps = getPoseProps(music, 'remaining');

class Synesthesia extends Component {
  constructor(props) {
    super(props);

    this.songs = getStates(music);
    this.order = [2, 1, 0]; //the order in which the songs in this.props.songs will be played.
    this.files = audioFiles;

    this.toggle = this.toggle.bind(this);
    this.getNext = this.getNext.bind(this);

    this.state = {
      song: this.songs[this.order[0]], //the first song to be played.
      audio: this.files[this.order[0]], //the file of the first song to be played.
      index: 0, //the current index of the this.songs array.
      switch: false,
    }
  }

  //updates the state to the next song.
  getNext() {
    var i = this.state.index;
    i++;
    if (i === this.order.length) i = 0;
    this.setState({
      song: this.songs[this.order[i]],
      audio: this.files[this.order[i]],
      index: i,
    });
  }

  //restarts the animation if the song is starting or stopped.
  toggle() {
    this.setState({switch: !this.state.switch});
  }

  render () {
    const Root = posed.div(rootProps.root);
    const Bass = posed.div(bassProps.bass);
    const Fifth = posed.div(fifthProps.fifth);
    const Highest = posed.div(highestProps.highest);
    const Remaining = posed.div(remainingProps.remaining);
    return (
      <div className={sStyles.container}>
        <Media>
          <div
            className={`media ${sStyles.playbutton}`}
            onClick={this.toggle}
          >
            <Player src={this.state.audio} />
            <PlayPause />
          </div>
        </Media>
        <div className={sStyles.title}>
          <Root
            className={sStyles.root}
            initialPose="pre"
            pose={this.order[this.state.index].toString()}
            onClick={this.getNext}
          >
            <Remaining
              className={sStyles.remaining}
              initialPose="pre"
              pose={this.order[this.state.index].toString()}
            />
            <Highest
              className={sStyles.highest}
              initialPose="pre"
              pose={this.order[this.state.index].toString()}
            />
            <Fifth
              className={sStyles.fifth}
              initialPose="pre"
              pose={this.order[this.state.index].toString()}
            />
            <Bass
              className={sStyles.bass}
              initialPose="pre"
              pose={this.order[this.state.index].toString()}
            />
          </Root>
          <div className={sStyles.description}>
            <i>{this.state.song.name}</i>{this.state.song.composer}
          </div>
        </div>
      </div>
    );
  }
}

/*onMouseEnter={() => this.setState({isHovering: true})}
onMouseLeave={() => this.setState({isHovering: false})}*/
export default Synesthesia
