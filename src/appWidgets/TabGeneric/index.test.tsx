import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TabGeneric from './';
import { TabGenericProps } from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: TabGenericProps = {
    tabs: [{
      title: 'myTab',
      callback: () => null,
    }],
    initialSelectedIndex: 1,
    isDisabled: false,
  }

  ReactDOM.render(<TabGeneric {...props}/>, div);
});
