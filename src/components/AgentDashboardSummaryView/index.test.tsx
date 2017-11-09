import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AgentDashboardSummary from './';
import {AgentDashboardSummaryProps } from './';
import * as Theme from './Theme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: AgentDashboardSummaryProps = {
    tasks: [],
    theme: Theme.DEFAULT_THEME
  }

  ReactDOM.render(<AgentDashboardSummary {...props}/>, div);
});
