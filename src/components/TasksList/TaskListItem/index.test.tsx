import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TaskListItem, { TaskListItemProps } from './index';
import * as Theme from './Theme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: TaskListItemProps = {
    data: null,
    index: 0,
    onTaskCheck : () => null,
    isChecked : false,
    theme : Theme.DEFAULT_THEME,
  }

  ReactDOM.render(<TaskListItem {...props}/>, div);
});
