/**
 * Copyright 2013-2015, Hudl
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Backward
 */

import React, { PropTypes } from 'react';

export default class Backward extends React.Component {

  static contextTypes = {
    video: PropTypes.instanceOf(HTMLVideoElement).isRequired,
    events: PropTypes.object.isRequired,
  }

  backward(interval) {
    this.context.video.currentTime = this.context.video.currentTime - interval;
    console.log('Backward5 - currentTime: ' + this.context.video.currentTime);
  }

  render() {
    return (
      <div onClick={() => this.backward(5)}>
      <svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 792" >
        <g fill="#FFFFFF">
          <path d="M258.7,305h97.7V333h-73.2l-2.5,41.1c5.8-6,14.3-10.5,33.8-10.5c32.6,0,54.1,30.6,54.1,60.1c0,39.6-23.1,64.7-66.7,64.7
            c-28.6,0-48.6-13.5-58.7-33.8l27.1-14c5.5,12.8,19.8,20.3,32.1,20.6c23.1,0.8,33.6-14.8,33.6-37.3c0-18.6-11.8-33.1-30.8-33.1
            c-12.8,0-22.3,6.5-27.3,15.6l-26.1-5L258.7,305z"></path>
          <path d="M528.5,185.6C412.3,62,218,56.1,94.4,172.3c-13,12.3-24.7,25.4-35.1,39.3L0,151.6v167.2h167.2L119,275
            c9.4-14.5,20.7-28.2,33.9-40.6c39.6-37.2,89.3-57,139.7-59.7v60.4h20.9v-60.6c56.2,2.2,111.5,25.4,153,69.5
            c36.7,39,56.4,87.8,59.7,137.4h-66.4v20.9h66.7c-1.6,56.9-25,113.2-69.6,155.2c-40.5,38.1-91.7,57.8-143.4,59.8v-68.7h-20.9v68.6
            c-54.9-3-108.7-26.1-149.3-69.2l-62.1,58.4C197.4,730,391.8,735.9,515.3,619.7C638.9,503.5,644.8,309.1,528.5,185.6z"></path>
        </g>
      </svg>
      </div>
    );
  }

}
