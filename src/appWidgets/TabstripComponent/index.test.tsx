import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TabstripComponent from './';
import { TabstripComponentProps } from './';
import * as Theme from './Theme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: TabstripComponentProps = {
    tabs: [{
      title: 'tab1',
      callback: () => null
    }],
    views: [<div></div>],
    tabHeight: '30px',
    selectedTabIndex  : 1,
    theme: Theme.DEFAULT_THEME,
  }

  ReactDOM.render(<TabstripComponent {...props}/>, div);
});
