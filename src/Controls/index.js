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

export default class Controls extends React.Component {

  static propTypes = {
    children: PropTypes.any,
  }

  static contextTypes = {
    video: PropTypes.instanceOf(HTMLVideoElement).isRequired,
    events: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      playing: false,
      focused: false,
      opacity: 0,
    };
  }

  componentDidMount() {
    this.context.events.onMouseEnter(() => this.setState({ opacity: 1 }));
    this.context.events.onMouseLeave(() => {
      if (!this.state.focused) {
        this.setState({ opacity: 0 });
      }
    });
  }

  render() {
    return (
      <div
        className="controls"
        style={{opacity: this.state.opacity}}
        onMouseEnter={() => this.setState({focused: true, opacity: 1})}
        onMouseLeave={() => this.setState({focused: false, opacity: 0})} >

        {this.props.children}
      </div>
    );
  }
}
