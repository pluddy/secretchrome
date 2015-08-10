/**
 * Copyright 2013-2015, Hudl
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SlowMotion
 */

import React, { PropTypes } from 'react';

export default class SlowMotion extends React.Component {

  static contextTypes = {
    video: PropTypes.instanceOf(HTMLVideoElement).isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      playing: !context.video.paused,
    };
  }

  slowMo() {
    this.context.video.playbackRate = 0.5;
    this.context.video.play();
  }

  resume() {
    this.context.video.playbackRate = 1;

    if (!this.state.playing) {
      this.context.video.pause();
    }
  }

  render() {
    return (
      <div onMouseDown={this.slowMo.bind(this)} onMouseUp={this.resume.bind(this)} >

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 84 84" version="1.1">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd" >
            <g id="slowforward-alt" fill="#FFFFFF" >
              <g id="slow_rwd_3_">
                <path d="M20 64 L20 0 L64 32 L20 64 Z" id="Shape"/>
                <rect id="Rectangle-path" x="0" y="0" width="11.1" height="64"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
