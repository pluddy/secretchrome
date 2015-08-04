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
import MediaEventPool from '../MediaEventPool';
import video from '../VideoAPI';


export default class Scrubber extends React.Component {

  static contextTypes = {
    video: PropTypes.object.isRequired,
  }

  componentDidMount() {
    MediaEventPool.onCanPlay(this.canPlay);
    console.log(video);
  }

  canPlay() {
    console.log('can play');
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
