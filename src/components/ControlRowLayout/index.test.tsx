import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Theme from './Theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AgentControlRowLayout from './index';
import { AgentControlRowLayoutProps } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: AgentControlRowLayoutProps = {
    component: <span/>,
    onEdit: () => null,
    hoveringOption: <span/>,
    hasEditOption: true,
    isChecked: false,
    theme: Theme.defaultTheme
  }
  ReactDOM.render(<MuiThemeProvider><AgentControlRowLayout {...props}/></MuiThemeProvider>, div);
});
