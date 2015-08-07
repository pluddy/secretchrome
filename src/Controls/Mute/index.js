/**
 * Copyright 2013-2015, Hudl
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Mute
 */

import React, { PropTypes } from 'react';

export default class Mute extends React.Component {

  static contextTypes = {
    video: PropTypes.instanceOf(HTMLVideoElement).isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      muted: false,
    };
  }

  render() {
    return this.state.muted ?
      this.unmuteIcon() :
      this.muteIcon();
  }


  muteVideo() {
    this.setState({muted: true});
    this.context.video.mute();
  }

  unmuteVideo() {
    this.setState({muted: false});
    this.context.video.unmute();
  }


  muteIcon() {
    return (
      <div onClick={this.muteVideo.bind(this)} style={{float: 'right'}}>
        <svg
          {...this.props}
          version="1.1" baseProfile="basic"
          xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 792"
        >
          <title>Mute</title>
          <path fill="#FFFFFF" d="M0,314.2v163.7h73.6l164.4,122V192.2l-164.4,122H0z M324.3,246.1c-9.6-9.7-25.3-9.7-34.9,0c-9.7,9.6-9.7,25.3,0,35l0,0
        	c31.7,31.8,47.5,73.2,47.6,114.8c0,41.7-15.8,83.2-47.6,115c-9.7,9.7-9.7,25.3,0,35c4.8,4.8,11.1,7.2,17.5,7.2
        	c6.3,0,12.7-2.4,17.5-7.2c41.4-41.4,62.1-95.8,62.1-150C386.5,341.7,365.6,287.4,324.3,246.1z M402.4,167.8c-9.6-9.7-25.3-9.7-35,0
        	c-9.6,9.7-9.6,25.3,0,35l0,0c53.3,53.3,80,123,80,192.8c0,70.2-26.5,140.1-80,193.6c-9.6,9.6-9.6,25.3,0,35
        	c4.8,4.8,11.2,7.2,17.5,7.2c6.3,0,12.6-2.4,17.5-7.2c63.1-63.1,94.5-146,94.5-228.6C496.9,313.2,465.3,230.7,402.4,167.8z
        	 M484.5,88.1c-9.7-9.7-25.3-9.7-35,0c-9.7,9.7-9.7,25.3,0,35c75.3,75.4,113,173.9,113,272.6c0,99-37.6,197.8-113,273.3
        	c-9.7,9.6-9.7,25.3,0,35c4.8,4.8,11.2,7.3,17.5,7.3c6.3,0,12.6-2.4,17.5-7.3C569.5,618.8,612,507.1,612,395.6
        	C612,284.4,569.3,172.9,484.5,88.1z"></path>
        </svg>
      </div>
    );
  }

  unmuteIcon() {
    return (
      <div onClick={this.unmuteVideo.bind(this)} style={{float: 'right'}}>
        <svg
          {...this.props}
          version="1.1" baseProfile="basic"
          xmlns="http://www.w3.org/2000/svg" x="10px" y="0px" viewBox="-10 142 255 281"
        >
          <title>Unmute</title>
          <path fill="#FFFFFF" d="M205.5 347.7c2.5-4.5 4.6-9.1 6.6-13.9 6.7-16.6 10-33.8 10-51.6 0-17.7-3.3-34.7-10-51.2s-16.5-31.3-29.5-44.3c-1.7-1.7-2.6-3.8-2.6-6.2s0.9-4.5
           2.6-6.2 3.8-2.6 6.2-2.6 4.4 0.9 5.9 2.6c14.7 14.6 25.9 31.2 33.5 50s11.4 38 11.4 57.9c0 20-3.8 39.3-11.4 58.1 -2.8 7-6.1 13.7-9.9 20.1l17.2 17.2
           -14.6 14.6 -14.6-14.6c-3.6 4.5-7.4 8.8-11.6 12.9 -1.5 1.5-3.5 2.3-5.9 2.3s-4.5-0.8-6.2-2.4 -2.6-3.6-2.6-6 0.9-4.5 2.6-6.2c4.1-4.1 7.9-8.4 11.4-12.9L177.6
           349c-3.4 4.7-7.3 9.2-11.5 13.4 -1.7 1.7-3.8 2.6-6.2 2.6s-4.5-0.9-6.2-2.6 -2.6-3.8-2.6-6.2 0.9-4.5 2.6-6.2c4.2-4.2 8-8.8 11.3-13.6L149.6 321c-3.1 5-6.7 9.7-11
           13.9 -1.7 1.7-3.8 2.6-6.2 2.6s-4.5-0.9-6.2-2.6c-1.7-1.7-2.6-3.8-2.6-6.2s0.9-4.5 2.6-6.2c4.4-4.4 8-9.2 10.6-14.3L105.6 277v80.7l-52-44.6H23.8l0.9-59.5h28.8L69
           240.4l-45.2-45.2 14.6-14.6 46.3 46.3 20.9-17.9v38.8l37.4 37.4c0-0.9 0.1-1.8 0.1-2.8 0-15.8-5.6-29.3-16.7-40.4 -1.7-1.7-2.6-3.8-2.6-6.2s0.9-4.4 2.6-6c1.7-1.6
           3.8-2.4 6.2-2.4s4.5 0.9 6.2 2.6c7.1 7 12.5 15 16.3 24.2 3.7 9.1 5.6 18.6 5.6 28.2 0 6.1-0.7 12.2-2.2 18.1l16.9 16.9c4.5-11.4 6.7-23.1 6.7-35.2
           0-12.4-2.4-24.5-7.2-36.2s-11.8-22.2-20.9-31.4c-1.7-1.7-2.6-3.8-2.6-6.2s0.9-4.5 2.6-6.2 3.8-2.6 6.2-2.6 4.5 0.9 6.2 2.6c10.8 10.8 19.1 23.2 24.6 37.1
           5.6 13.9 8.4 28.2 8.4 42.9 0 14.9-2.8 29.2-8.4 43.1 -0.7 1.8-1.5 3.6-2.3 5.3L205.5 347.7z"></path>
        </svg>
      </div>
    );
  }
}
