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
import verifyChildrenOrder from './VerifyChildrenOrder';

export default class Video extends React.Component {

  static propTypes = {
    children: PropTypes.any,
  }

  static childContextTypes = {
    video: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    /* eslint-disable */
    console.time('VideoChromePerfTimer');
    /* eslint-enable */

    verifyChildrenOrder(this.children());
  }

  getChildContext() {
    return {
      video: { data: true },
    };
  }

  componentDidMount() {
    /* eslint-disable */
    console.timeEnd('VideoChromePerfTimer');
    /* eslint-enable */

    const video = React.findDOMNode(this.refs.video);
    _provideVideoDOMNode(video);

    function dispatchEvent(event) {
      _dispatch(VideoEventConstants[event.type]);
    }

    // this can be moved inline with the video declaration
    // with React 0.14 as Native Video events are handled
    for (const nativeEventName in VideoEventConstants) {
      if (VideoEventConstants.hasOwnProperty(nativeEventName)) {
        video.addEventListener(
          nativeEventName,
          dispatchEvent
        );
      }
    }
  }

  children() {
    let arrayChildren = this.props.children;

    if (!Array.isArray(arrayChildren)) {
      arrayChildren = [this.props.children];
    }

    return arrayChildren;
  }


  render() {
    const children = this.children().map(
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
