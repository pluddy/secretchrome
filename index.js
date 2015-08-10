import Video, { Scrubber, Controls, PlayPause, Forward, Backward, SlowMotion, Fullscreen, Mute, Hudl } from './src/';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(

  <Video>
    <Controls>
      <Backward />
      <PlayPause />
      <Forward />
      <SlowMotion />
      <Hudl />
      <Fullscreen />
      <Mute />
    </Controls>

    <Scrubber />
  </Video>

, document.getElementById('app'));
