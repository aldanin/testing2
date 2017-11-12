import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { INVENTORY_REPORT_DEFAULT } from '../../types/TypeDefaults'
import InventoryView from './';
import * as EmployeeSummary from '../../types/EmployeeSummary'
import { InventoryViewProps } from './';
import * as Theme from './Theme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: InventoryViewProps = {
    inventoryReport: INVENTORY_REPORT_DEFAULT,
    employeeSummay: EmployeeSummary.DEFAULT_AGENT_SUMMARY,
    tasks: [],
    onAbortTask: (taskid: string) => null,
    theme: Theme.DEFAULT_THEME
  }

  ReactDOM.render(<InventoryView {...props}/>, div);
});
