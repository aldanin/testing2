import * as React from 'react';
import * as ReactDOM from 'react-dom';

import DashboardCalendar from './';
import { DashboardCalendarProps } from './';
import * as Theme from './Theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: DashboardCalendarProps = {
    tasks: [],
    theme: Theme.DEFAULT_THEME,
  }

  ReactDOM.render(<MuiThemeProvider><DashboardCalendar {...props}/></MuiThemeProvider>, div);
});
