import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TypeDefaults from '../../types/TypeDefaults'
import InventoryStationsView from './';
import {InventoryStationsViewProps } from './';
import * as Theme from './Theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as RosemanTypes from '../../types/RosemanTypes'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: InventoryStationsViewProps = {
    inventoryMainData: TypeDefaults.INVENTORY_MAIN_DEFAULT,
    onStationSelected: (stationId: RosemanTypes.RosemanID,
                        deviceType: RosemanTypes.DeviceTypes.NozzleReader) => null,
    theme: Theme.DEFAULT_THEME,
  }

  ReactDOM.render(<MuiThemeProvider><InventoryStationsView {...props}/></MuiThemeProvider>, div);
});
