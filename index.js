import Video, { Scrubber, Controls, PlayPause, SlowMotion, Fullscreen, Mute, Hudl } from './src/';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(

  <Video>
    <Controls>
      <PlayPause />
      <SlowMotion />
      <Hudl />
      <Fullscreen />
      <Mute />
    </Controls>

    <Scrubber />
  </Video>

, document.getElementById('app'));
