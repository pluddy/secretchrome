/**
 * Copyright 2013-2015, Hudl
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Fullscreen
 */

import React, { PropTypes } from 'react';

export default class Fullscreen extends React.Component {

  static contextTypes = {
    video: PropTypes.instanceOf(HTMLVideoElement).isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      fullscreen: false,
    };
  }

  render() {
    return this.state.fullscreen ?
      this.exitFullscreenDOM() :
      this.enterFullscreenDOM();
  }

  toggleFullscreen(direction) {
    if (direction === 'open') {
      this.context.video.mozRequestFullScreen();
      this.setState({ fullscreen: true });
      return;
    }

    this.context.video.mozExitFullScreen();
    this.setState({ fullscreen: false });
  }

  enterFullscreenDOM() {
    return (
      <div onClick={this.toggleFullscreen.bind(this, 'open')}>
        <svg version="1.1" baseProfile="basic"xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 792">
          <g>
            <polygon points="184.5,339.5 249.4,274.6 136,161.2 218.6,90 0.2,90.2 0,308.6 70.8,225.8 	"/>
            <polygon points="541.4,566.4 427.6,452.6 362.7,517.5 476.2,631 393.4,702 612,702 612,483.4 	"/>
            <polygon points="427.5,339.4 541,226 612,308.6 611.9,90.2 393.4,90 476.4,160.8 362.6,274.6 	"/>
            <polygon points="184.6,452.7 71.2,566.2 0,483.4 0,702 218.6,702 135.8,631.4 249.5,517.6 	"/>
          </g>
        </svg>
      </div>
    );
  }


  exitFullscreenDOM() {
    return (
      <div onClick={this.toggleFullscreen.bind(this, 'close')}>
        <svg version="1.1" baseProfile="basic" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 792">
          <g>
            <polygon points="611.8,154.9 546.9,90 433.5,203.4 353,113.5 353,348.9 588.4,348.9 498,268.6 	"/>
            <polygon points="114,523.4 0.2,637.1 65.1,702 178.5,588.6 258.9,678.4 258.9,443.1 23.5,443.1 	"/>
            <polygon points="612,636.9 498.6,523.5 588.4,443.1 353,443.1 353,678.4 433.4,588.1 547.1,701.8 	"/>
            <polygon points="0,155.1 113.4,268.5 23.5,348.9 258.9,348.9 258.9,113.5 178.6,204 64.9,90.2 	"/>
          </g>
        </svg>
      </div>
    );
  }
}
