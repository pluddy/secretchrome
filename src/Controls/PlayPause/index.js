/**
 * Copyright 2013-2015, Hudl
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PlayPause
 */

import React from 'react';
import video from '../../VideoAPI';

export default class PlayPause extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      playing: false,
    };
  }

  render() {
    return this.state.playing ?
      this.pauseIcon() :
      this.playIcon();
  }


  playVideo() {
    this.setState({playing: true});
    video.play();
  }

  pauseVideo() {
    this.setState({playing: false});
    video.pause();
  }


  pauseIcon() {
    return (
      <div onClick={this.pauseVideo.bind(this)}>
        <svg
          {...this.props}
          version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
        >
          <title>Pause</title>
          <path d="M3 0h14v48H3V0zM30.7 0h14v48h-14V0z"/>
        </svg>
      </div>
    );
  }

  playIcon() {
    return (
      <div onClick={this.playVideo.bind(this)}>
        <svg
          {...this.props}
          version="1.1" baseProfile="basic" id="Layer_1"
          xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 792"
        >
          <title>Play</title>
          <polygon fill="#231F20" points="0,19.4 0,772.6 612,396 "/>
        </svg>
      </div>
    );
  }
}
