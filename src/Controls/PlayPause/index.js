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

import React, { PropTypes } from 'react';

export default class PlayPause extends React.Component {

  static contextTypes = {
    video: PropTypes.instanceOf(HTMLVideoElement).isRequired,
  }

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
    this.context.video.play();
  }

  pauseVideo() {
    this.setState({playing: false});
    this.context.video.pause();
  }


  pauseIcon() {
    return (
      <div onClick={this.pauseVideo.bind(this)}>
        <svg
          {...this.props}
          version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 792">
        >
          <title>Pause</title>
          <g fill="#FFFFFF">
            <polygon fill="#FFFFFF" points="0,0 0,792 250,792 250,0"/>
            <polygon fill="#FFFFFF" points="362,0 362,792 612,792 612,0"/>
          </g>
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
          <polygon  fill="#FFFFFF" points="0,0 0,792 612,396 "/>
        </svg>
      </div>
    );
  }
}
