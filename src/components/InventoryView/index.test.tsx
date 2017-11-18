import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { INVENTORY_MAIN_DEFAULT, INVENTORY_DEVICES_DEFAULT } from '../../types/TypeDefaults'
import InventoryView from './';
import * as EmployeeSummary from '../../types/EmployeeSummary'
import { InventoryViewProps } from './';
import * as Theme from './Theme'
import * as RosemanTypes from '../../types/RosemanTypes'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: InventoryViewProps = {
    inventoryMainData: INVENTORY_MAIN_DEFAULT,
    inventoryNozzleReadersData: INVENTORY_DEVICES_DEFAULT,
    inventoryRFUData: INVENTORY_DEVICES_DEFAULT,
    inventoryCVSData: INVENTORY_DEVICES_DEFAULT,
    onDeviceTypeSelected: (deviceType: RosemanTypes.DeviceTypes) => null,
    currentViewType: 'Station',
    employeeSummay: EmployeeSummary.DEFAULT_AGENT_SUMMARY,
    onStationSelected: (stationId: RosemanTypes.RosemanID) => null,
    tasks: [],
    theme: Theme.DEFAULT_THEME
  }

  ReactDOM.render(<InventoryView {...props}/>, div);
});
