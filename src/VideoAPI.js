/**
 * Copyright 2013-2015, Hudl
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule API
 */

import API from './MediaEventPool'

// gets set by internal video component
let videoDOMNode;

const apiMethods = {
  audioTracks: ['setter', 'getter'],
  autoplay: ['setter', 'getter'],
  buffered: 'getter',
  controller: ['setter', 'getter'],
  controls: ['setter', 'getter'],
  crossOrigin: ['setter', 'getter'],
  currentSrc: 'getter',
  currentTime: ['setter', 'getter'],
  defaultMuted: ['setter', 'getter'],
  defaultPlaybackRate: ['setter', 'getter'],
  duration: 'getter',
  ended: 'getter',
  error: 'getter',
  loop: ['setter', 'getter'],
  mediaGroup: ['setter', 'getter'],
  muted: ['setter', 'getter'],
  networkState: ['setter', 'getter'],
  paused: 'getter',
  playbackRate: ['setter', 'getter'],
  played: 'getter',
  preload: ['setter', 'getter'],
  readyState: 'getter',
  seekable: 'getter',
  seeking: 'getter',
  src: ['setter', 'getter'],
  textTracks: ['setter', 'getter'],
  videoTracks: ['setter', 'getter'],
  volumem: ['setter', 'getter'],

  canPlayType: 'function',
  fastSeek: 'function',
  load: 'function',
  pause: 'function',
  play: 'function',
};


/*
 * generate the apiMethods per necassary attaching to the `videoDOMNode`
 * to recreate a spec worthy interface
 */
for (let methodName in apiMethods) {
  const methodType = apiMethods[methodName];

  if (Array.isArray(methodType )) {
    setterGetterMethod(methodName);
  } else if (methodType === 'setter') {
    setterMethod(methodName);
  } else if (methodType === 'getter') {
    getterMethod(methodName);
  } else {
    functionMethod(methodName);
  }
}


function setterGetterMethod(methodName : string) : void {
  Object.defineProperty(API, methodName, {
    set: function(value) { videoDOMNode[methodName] = value; },
    get: function() { videoDOMNode[methodName]; },
  });
}

function setterMethod(methodName : string) : void {
  Object.defineProperty(API, methodName, {
    set: function(value) { videoDOMNode[methodName] = value; },
  });
}

function getterMethod(methodName : string) : void {
  Object.defineProperty(API, methodName, {
    get: function() { videoDOMNode[methodName]; },
  });
}

function functionMethod(methodName : string) : void {
  API[methodName] = function() {
    videoDOMNode[methodName]();
  };
}


export default API;
export function _provideVideoDOMNode(_videoDOMNode) {
  videoDOMNode = _videoDOMNode;
}

