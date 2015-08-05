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
import { _provideVideoDOMNode } from '../VideoAPI';
import VideoEventConstants from '../shared/VideoEventConstants';

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
      video: { data: true },
    }
  }

  componentDidMount() {
    console.timeEnd('VideoChromePerfTimer');
    let video = React.findDOMNode(this.refs.video);

    _provideVideoDOMNode(video);

    // this can be removed with React 0.14 as Native Video events are handled
    for (var nativeEventName in VideoEventConstants) {
      video.addEventListener(
        nativeEventName,
        (event) => _dispatch(VideoEventConstants[nativeEventName], event)
      );
    }
  }


  render() {
    let arrayChildren = this.props.children;

    if (!Array.isArray(arrayChildren)) {
      arrayChildren = [this.props.children];
    }

    let children = arrayChildren.map(
      (child) => React.addons.cloneWithProps(child, {key: child.type.name})
    );

    return (
      <div>
        <video
          ref="video"
          src="http://vc.hudl.com/perfcenter/dd7ea145-Hd-559f26f1f5723812b09ab97d.mp4"
          onMouseEnter={(event) => _dispatch('onMouseEnter', event)}
          onMouseLeave={(event) => _dispatch('onMouseLeave', event)}
        />
        {children}
      </div>
    );
  }
}
