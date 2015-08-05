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

import React from 'react';
import video from '../../VideoAPI';

export default class SlowMotion extends React.Component {

  playVideo() {
    video.playbackRate = 0.5;
    video.play();
  }

  render() {
    return (
      <div onClick={this.playVideo}>

        <svg xmlns="http://www.w3.org/2000/svg" width="63px" height="64px" viewBox="0 0 63 64" version="1.1">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd" >
            <g id="slowforward-alt" fill="#000000">
              <g id="slow_rwd_3_">
                <path d="M19.4782609 64 L19.4782609 0 L62.4269913 31.5 L19.4782609 64 Z" id="Shape"/>
                <rect id="Rectangle-path" x="0" y="0" width="11.1" height="64"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
