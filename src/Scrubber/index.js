/**
 * Copyright 2013-2015, Hudl
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Scrubber
 */

import React, { PropTypes } from 'react';

export default class Scrubber extends React.Component {

  static contextTypes = {
    video: PropTypes.instanceOf(HTMLVideoElement).isRequired,
    events: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.context.events.onTimeUpdate(this.timeUpdate);
  }

  timeUpdate() {
    //console.log('timeupdate');
  }


  render() {
    return (
      <div>
        <button onClick={() => video.currentTime = 0}>Beginning</button>
        <button onClick={() => video.currentTime = 5}>Forward</button>
      </div>
    );
  }

}
