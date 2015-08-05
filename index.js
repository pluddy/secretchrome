import { Video, Scrubber, Controls } from './src/';
import React from 'react';

React.render(

  <Video>
    <Controls controls={{playPause: true}}/>
    <Scrubber />
  </Video>

, document.getElementById('app'));
