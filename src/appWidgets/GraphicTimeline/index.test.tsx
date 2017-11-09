import * as React from 'react';
import * as ReactDOM from 'react-dom';

import GraphicTimeline from './index';
import { GraphicTimelineProps } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: GraphicTimelineProps = {
    dates: [0,0,0]
  }

  ReactDOM.render(<GraphicTimeline {...props}/>, div);
});
