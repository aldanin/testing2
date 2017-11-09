import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TasksBarChart from './';
import { TasksBarChartProps } from './';
import * as Theme from './Theme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: TasksBarChartProps = {
    tasks: [],
    theme: Theme.DEFAULT_THEME
  }

  ReactDOM.render(<TasksBarChart {...props}/>, div);
});
