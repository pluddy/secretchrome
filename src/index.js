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

import Scrubber from './Scrubber';
import Controls from './Controls';
import PlayPause from './Controls/PlayPause';
import Forward from './Controls/Forward';
import Backward from './Controls/Backward';
import SlowMotion from './Controls/SlowMotion';
import Fullscreen from './Controls/Fullscreen';
import Mute from './Controls/Mute';
import Hudl from './Controls/Hudl';

export default Video;
export {
  // components
  Scrubber,

  Controls,
    PlayPause,
    Forward,
    Backward,
    SlowMotion,
    Fullscreen,
    Mute,
    Hudl,
};
