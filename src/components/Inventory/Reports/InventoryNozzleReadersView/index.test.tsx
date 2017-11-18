import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TypeDefaults from '../../../../types/TypeDefaults'
import InventoryNozzleView from './';
import {InventoryNozzleReadersViewProps } from './';
import * as Theme from './Theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: InventoryNozzleReadersViewProps = {
    inventoryNozzleReadersData: TypeDefaults.INVENTORY_DEVICES_DEFAULT,
    theme: Theme.DEFAULT_THEME,
  }

  ReactDOM.render(<MuiThemeProvider><InventoryNozzleView {...props}/></MuiThemeProvider>, div);
});
