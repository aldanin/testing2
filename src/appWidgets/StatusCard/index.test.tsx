import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Theme from './Theme'

import StatusCard from './index';
import { StatusCardProps } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: StatusCardProps = {
    value: 33,
    caption: 'Caption',
    color: 'red',
    theme: Theme.DEFAULT_THEME
  }

  ReactDOM.render(<StatusCard {...props}/>, div);
});
