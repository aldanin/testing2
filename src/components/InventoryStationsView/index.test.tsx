import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TypeDefaults from '../../types/TypeDefaults'
import InventoryStationsView from './';
import {InventoryStationsViewProps } from './';
import * as Theme from './Theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: InventoryStationsViewProps = {
    inventoryReport: TypeDefaults.INVENTORY_REPORT_DEFAULT,
    theme: Theme.DEFAULT_THEME,
    onAbortTask: (taskId: string) => null,
  }

  ReactDOM.render(<MuiThemeProvider><InventoryStationsView {...props}/></MuiThemeProvider>, div);
});
