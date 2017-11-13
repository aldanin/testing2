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
    inventoryMainData: TypeDefaults.INVENTORY_REPORT_DEFAULT,
    onInventoryStationsTableRowExpanded: (stationId: RosemanTypes.RosemanID, deviceType: string) => null,
    theme: Theme.DEFAULT_THEME,
  }

  ReactDOM.render(<MuiThemeProvider><InventoryStationsView {...props}/></MuiThemeProvider>, div);
});
