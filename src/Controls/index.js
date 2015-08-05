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

export default class Controls extends React.Component {

  static propTypes = {
    children: PropTypes.any,
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      hidden: true,
      playing: false,
    };
  }

  componentDidMount() {
    MediaEventPool.onMouseEnter(() => this.setState({ hidden: false }));
    MediaEventPool.onMouseLeave(() => this.setState({ hidden: true }));
  }


  render() {
    return (
      <div
        className={this.state.hidden ? 'hidden controls' : 'controls'}
        onMouseEnter={() => this.setState({hidden: false})} >
        {this.props.children}
      </div>
    );
  }
}

// export child controls
import PlayPause from './PlayPause';

export {
  PlayPause,
};
