import Video, { Scrubber, Controls, PlayPause, SlowMotion, Fullscreen} from './src/';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(

  <Video>
    <Controls>
      <PlayPause />
      <SlowMotion />
      <Fullscreen />
    </Controls>

    <Scrubber />
  </Video>

, document.getElementById('app'));
