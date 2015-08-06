import React, { PropTypes } from 'react/addons';
import MediaEventPool from '../shared/MediaEventPool';
import verifyChildrenOrder from './VerifyChildrenOrder';

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
      <div>
        {this.props.children}
      </div>
    );
  }
}
