import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TypeDefaults from '../../types/TypeDefaults'
import InventorySelector from './';
import {InventorySelectorProps } from './';
import * as Theme from './Theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as RosemanTypes from '../../types/RosemanTypes'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: InventorySelectorProps = {
    inventoryMainData: TypeDefaults.INVENTORY_MAIN_DEFAULT,
    onStationsSelected: (stationId: RosemanTypes.RosemanID, deviceType: string) => null,
    onDeviceSelected: (deviceType: RosemanTypes.DeviceTypes) => null,
    theme: Theme.DEFAULT_THEME,
  }

  ReactDOM.render(<MuiThemeProvider><InventorySelector {...props}/></MuiThemeProvider>, div);
});
