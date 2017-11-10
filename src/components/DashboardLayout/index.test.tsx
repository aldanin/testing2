import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AgentDashboard from './';
import * as EmployeeSummary from '../../types/EmployeeSummary'
import { AgentDashboardProps } from './';
import * as Theme from './Theme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: AgentDashboardProps = {
    agentSummary: EmployeeSummary.DEFAULT_AGENT_SUMMARY,
    tasks: [],
    onAbortTask: (taskid: string) => null,
    theme: Theme.DEFAULT_THEME
  }

  ReactDOM.render(<AgentDashboard {...props}/>, div);
});
