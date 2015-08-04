/**
 * Copyright 2013-2015, Hudl
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule MediaEventPool
 */

const topLevelMethods = [
  'onAbort',
  'onCanPlay',
  'onCanPlayThrough',
  'onDurationChange',
  'onEmptied',
  'onEncrypted',
  'onEnded',
  'onError',
  'onLoadedData',
  'onLoadedMetadata',
  'onLoadStart',
  'onPause',
  'onPlay',
  'onPlaying',
  'onProgress',
  'onRateChange',
  'onSeeked',
  'onSeeking',
  'onStalled',
  'onSuspend',
  'onTimeUpdate',
  'onVolumeChange',
  'onWaiting',
];

let mediaEventPoolContainer = {};
let mediaEventPoolMethods = {};
topLevelMethods.forEach(
  (methodName) => {
    // create pool container for dispatching
    mediaEventPoolContainer[methodName] = []

    // create dynamic method for each topLevelMethods
    // to attach functions to events
    mediaEventPoolMethods[methodName] = (fn) => {
      mediaEventPoolContainer[methodName].push(fn);
    }
  }
);

export function _dispatch(method) {
  mediaEventPoolContainer[method].forEach(
    (method) => method()
  );
}

export default mediaEventPoolMethods;
