import * as React from 'react';
import * as ReactDOM from 'react-dom';

import DashboardSummary from './';
import {DashboardTasksProps } from './';
import * as Theme from './Theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: DashboardTasksProps = {
    tasks: [],
    theme: Theme.DEFAULT_THEME,
    onAbortTask: (taskId: string) => null,
  }

  ReactDOM.render(<MuiThemeProvider><DashboardSummary {...props}/></MuiThemeProvider>, div);
});
