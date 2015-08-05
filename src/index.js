/**
 * Copyright 2013-2015, Hudl
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule VideoChrome
 */

import Video from './Video';
import API from './VideoAPI';

import Scrubber from './Scrubber';
import Controls, {
  PlayPause,
  SlowMotion,
  Fullscreen,
} from './Controls';

export default Video;
export {
  // components
  Scrubber,

  Controls,
    PlayPause,
    SlowMotion,
    Fullscreen,

  // logic
  API
};
