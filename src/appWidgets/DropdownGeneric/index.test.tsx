import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import DropDownGeneric, { DropDownGenericProps } from './';

injectTapEventPlugin();

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: DropDownGenericProps = {
    caption: 'caption',
    values: ['value1', 'value2'],
    selectCallback: () => null,
  }
  ReactDOM.render(
    <DropDownGeneric
      values={props.values}
      caption={props.caption}
      selectCallback={props.selectCallback}
    />
    ,
    div);
});
