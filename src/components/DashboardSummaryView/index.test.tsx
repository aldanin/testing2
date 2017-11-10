import * as React from 'react';
import * as ReactDOM from 'react-dom';

import DashboardSummary from './';
import {DashboardSummaryProps } from './';
import * as Theme from './Theme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: DashboardSummaryProps = {
    tasks: [],
    theme: Theme.DEFAULT_THEME
  }

  ReactDOM.render(<DashboardSummary {...props}/>, div);
});
