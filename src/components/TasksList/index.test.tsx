import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TasksList, { TasksListProps } from './index';
import * as Theme from './Theme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: TasksListProps = {
    data: [],
    checkedRows : [],
    onTaskCheck: (taskId: string, isChecked: boolean) => null,
    onAbortTask: (taskId: string) => null,
    onHeaderClick: (headerField: string) => null,
    headerStatus: {
      startTimestamp: 'asc'
    },
    loadMoreData : () => null,
    theme : Theme.DEFAULT_THEME,
  }

  ReactDOM.render(<TasksList {...props}/>, div);
});
