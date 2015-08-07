/**
 * Copyright 2013-2015, Hudl
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Forward
 */

import React, { PropTypes } from 'react';

export default class Forward extends React.Component {

  static contextTypes = {
    video: PropTypes.instanceOf(HTMLVideoElement).isRequired,
  }

  constructor(props, context) {
    super(props, context);
  }

  forward(interval) {
    this.context.video.
  }

  render() {
    return (
      <div onClick=this.forward(5)>
        <svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 792" xml:space="preserve">
          <g fill="#FFFFFF" >
            <path d="M261.5,304.1h98.6v28.3h-73.9l-2.5,41.5c5.8-6.1,14.4-10.6,34.1-10.6c32.9,0,54.6,30.9,54.6,60.7c0,40-23.3,65.3-67.3,65.3
            c-28.8,0-49.1-13.7-59.2-34.1l27.3-14.2c5.6,12.9,20,20.5,32.4,20.7c23.3,0.8,33.9-14.9,33.9-37.7c0-18.7-11.9-33.4-31.1-33.4
            c-12.9,0-22.5,6.6-27.6,15.7l-26.3-5.1L261.5,304.1z"></path>
            <path d="M612,318V149.3l-56.9,60.6c-10.5-14-19.3-27.3-32.4-39.6C398,52.9,201.9,58.9,84.6,183.6
            C-32.7,308.3-27.5,504.5,97.2,621.8c124.7,117.3,320.1,111.3,437.4-13.4l-64.2-59c-40.9,43.5-90.4,66.8-153.7,69.8V550h-21.1v69.4
            c-42.2-2-100.8-21.9-141.7-60.3c-45.1-42.4-65.6-99.2-67.2-156.7H148v-21.1H87c3.3-50.1,20.2-99.4,57.2-138.7
            c41.8-44.5,109.2-67.9,151.4-70.1v61.2h21.1v-61c63.3,2.8,104.1,22.7,144,60.3c13.3,12.5,27.7,26.3,37.2,41L449.3,318H612z"></path>
          </g>
        </svg>
      </div
    )
  }

}
