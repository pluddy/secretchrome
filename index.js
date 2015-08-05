import Video, { Scrubber, Controls, PlayPause } from './src/';
import React from 'react';

React.render(

  <Video>

    <Controls>
      <PlayPause />
    </Controls>

    <Scrubber />
  </Video>

, document.getElementById('app'));
