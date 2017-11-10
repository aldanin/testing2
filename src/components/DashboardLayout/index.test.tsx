import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Dashboard from './';
import * as EmployeeSummary from '../../types/EmployeeSummary'
import { DashboardProps } from './';
import * as Theme from './Theme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: DashboardProps = {
    employeeSummay: EmployeeSummary.DEFAULT_AGENT_SUMMARY,
    tasks: [],
    onAbortTask: (taskid: string) => null,
    theme: Theme.DEFAULT_THEME
  }

  ReactDOM.render(<Dashboard {...props}/>, div);
});
