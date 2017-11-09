import * as React from 'react';
import * as ReactDOM from 'react-dom';

import FiltersStripComponent from './index';
import { FiltersStripComponentProps } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: FiltersStripComponentProps = {
    selectType: (value: number) => null
  }

  ReactDOM.render(<FiltersStripComponent {...props}/>, div);
});
