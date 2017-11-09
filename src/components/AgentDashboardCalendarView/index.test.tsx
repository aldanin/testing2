import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AgentDashboardCalendar from './';
import { AgentDashboardCalendarProps } from './';
import * as Theme from './Theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: AgentDashboardCalendarProps = {
    tasks: [],
    theme: Theme.DEFAULT_THEME,
  }

  ReactDOM.render(<MuiThemeProvider><AgentDashboardCalendar {...props}/></MuiThemeProvider>, div);
});
