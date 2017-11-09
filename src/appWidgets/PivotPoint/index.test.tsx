import * as React from 'react';
import * as ReactDOM from 'react-dom';

import PivotPoint from './index';
import { PivotPointProps } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: PivotPointProps = {
  }

  ReactDOM.render(<PivotPoint {...props}/>, div);
});
