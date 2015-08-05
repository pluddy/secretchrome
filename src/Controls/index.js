/**
 * Copyright 2013-2015, Hudl
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Controls
 */

import React, { PropTypes } from 'react';
import MediaEventPool from '../MediaEventPool';
import video from '../VideoAPI';
import PlayIcon from './PlayIcon';
import PauseIcon from './PauseIcon';

export default class Controls extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      hidden: true,
      playing: false,
    }
  }

  static propTypes = {
    controls: PropTypes.shape({
      playPause: PropTypes.bool,
      fullscreen: PropTypes.bool,
    }).isRequired,
  }

  componentDidMount() {
    MediaEventPool.onMouseEnter(() => this.setState({ hidden: false }));
    MediaEventPool.onMouseLeave(() => this.setState({ hidden: true }));
  }

  play() {
    this.setState({playing: true});
    video.play();
  }

  pause() {
    this.setState({playing: false});
    video.pause();
  }

  render() {
    return (
      <div
        className={this.state.hidden ? 'hidden controls' : 'controls'}
        onMouseEnter={() => this.setState({hidden: false})} >
        {this.playControlNode()}

        {this.fullscreenNode()}
      </div>
    );
  }

  playControlNode() : React.DOM {
    if (!this.props.controls.playPause) {
      return;
    }

    return this.state.playing ?
      <PauseIcon onClick={() => this.pause()} /> :
      <PlayIcon onClick={() => this.play()} />
  }

  fullscreenNode() : React.DOM {
    if (!this.props.controls.fullscreen) {
      return;
    }

    return <div>FullSCREEN!</div>
  }

}
