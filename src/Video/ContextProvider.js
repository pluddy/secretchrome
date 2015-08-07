import React, { PropTypes } from 'react';
import MediaEventPool from '../shared/MediaEventPool';
import verifyChildrenOrder from './VerifyChildrenOrder';

const transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -80, 0, 1)';

export default class ContextProvider extends React.Component {

  static propTypes = {
    video: PropTypes.instanceOf(HTMLVideoElement).isRequired,
    children: PropTypes.any,
  }

  static childContextTypes = {
    video: PropTypes.instanceOf(HTMLVideoElement).isRequired,
    events: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    verifyChildrenOrder(this.children());
  }

  getChildContext() {
    return {
      video: this.props.video,
      events: MediaEventPool,
    };
  }


  children() {
    let arrayChildren = this.props.children;

    if (!Array.isArray(arrayChildren)) {
      arrayChildren = [this.props.children];
    }

    return arrayChildren;
  }

  render() {
    return (
      <div style={{transform}}>
        {this.props.children}
      </div>
    );
  }
}
