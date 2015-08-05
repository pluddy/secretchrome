import Video, { Scrubber, Controls, PlayPause, SlowMotion, Fullscreen} from './src/';
import React from 'react';

React.render(

  <Video>
    <Controls>
      <PlayPause />
      <SlowMotion />
      <Fullscreen />
    </Controls>

    <Scrubber />
  </Video>

, document.getElementById('app'));
