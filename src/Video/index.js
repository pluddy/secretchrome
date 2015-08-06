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

import React, { PropTypes } from 'react';
import { _dispatch } from '../shared/MediaEventPool';
import VideoEventConstants from '../shared/VideoEventConstants';
import ContextProvider from './ContextProvider';

export default class Video extends React.Component {

  static propTypes = {
    children: PropTypes.any,
  }

  constructor(props, context) {
    super(props, context);
    /* eslint-disable */
    console.time('VideoChromePerfTimer');
    /* eslint-enable */

    this.state = {
      renderChildren: false,
    };
  }

  componentDidMount() {
    /* eslint-disable */
    console.timeEnd('VideoChromePerfTimer');
    /* eslint-enable */

    this.video = this.refs.video;

    function dispatchEvent(event) {
      _dispatch(VideoEventConstants[event.type]);
    }

    this.video.addEventListener('canplay', () => {
      this.setState({ renderChildren: true });
    });

    // this can be moved inline with the video declaration
    // with React 0.14 as Native Video events are handled
    for (const nativeEventName in VideoEventConstants) {
      if (VideoEventConstants.hasOwnProperty(nativeEventName)) {
        this.video.addEventListener(
          nativeEventName,
          dispatchEvent
        );
      }
    }
  }


  render() {
    let children;

    if (this.state.renderChildren) {
      children = (
        <ContextProvider video={this.video}>
          {this.props.children}
        </ContextProvider>
      );
    }

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
