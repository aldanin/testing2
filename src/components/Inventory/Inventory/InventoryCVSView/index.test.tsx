import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TypeDefaults from '../../../../types/TypeDefaults'
import InventoryCVSView from './';
import {InventoryCVSViewProps } from './';
import * as Theme from './Theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: InventoryCVSViewProps = {
    inventoryCVSData: TypeDefaults.INVENTORY_DEVICES_DEFAULT,
    theme: Theme.DEFAULT_THEME,
  }

  ReactDOM.render(<MuiThemeProvider><InventoryCVSView {...props}/></MuiThemeProvider>, div);
});
