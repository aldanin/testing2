import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TasksPinChart from './';
import { TasksPinsChartProps } from './';
import * as Theme from './Theme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: TasksPinsChartProps = {
    tasks: [],
    theme: Theme.DEFAULT_THEME
  }

  ReactDOM.render(<TasksPinChart {...props}/>, div);
});
