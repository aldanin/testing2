import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { INVENTORY_REPORT_DEFAULT } from '../../types/TypeDefaults'
import InventoryView from './';
import * as EmployeeSummary from '../../types/EmployeeSummary'
import { InventoryViewProps } from './';
import * as Theme from './Theme'
import * as RosemanTypes from '../../types/RosemanTypes'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: InventoryViewProps = {
    inventoryMainData: INVENTORY_REPORT_DEFAULT,
    employeeSummay: EmployeeSummary.DEFAULT_AGENT_SUMMARY,
    onInventoryStationsTableRowExpanded: (stationId: RosemanTypes.RosemanID,
                                          deviceType: string) => null,
    tasks: [],
    theme: Theme.DEFAULT_THEME
  }

  ReactDOM.render(<InventoryView {...props}/>, div);
});
