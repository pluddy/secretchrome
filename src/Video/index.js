/**
 * Copyright 2013-2015, Hudl
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Video
 */

import React, { PropTypes } from 'react/addons';
import { _dispatch } from '../MediaEventPool';
import { provideVideoDOMNode } from '../VideoAPI';

export default class Video extends React.Component {

  constructor(props, context) {
    super(props, context);
    console.time('VideoChromePerfTimer');
  }

  static childContextTypes = {
    video: PropTypes.object.isRequired,
  }

  getChildContext() {
    return {
      video: {
        data: true
      },
    }
  }

  componentDidMount() {
    console.timeEnd('VideoChromePerfTimer');
    let video = React.findDOMNode(this.refs.video);

    provideVideoDOMNode(video);
    video.addEventListener(
      'canplay',
      _dispatch('onCanPlay')
    );
  }


  render() {
    return (
      <div>
        <video
          controls={true}
          ref="video"
          src="http://vc.hudl.com/perfcenter/dd7ea145-Hd-559f26f1f5723812b09ab97d.mp4"
        />
        {React.addons.cloneWithProps(this.props.children)}
      </div>
    );
  }

}
