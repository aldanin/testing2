import * as React from 'react'
import * as ReactDOM from 'react-dom'

import UserLinks from './UserLinks'
import { UserLinksProps } from './UserLinks'

import Themed from '../../init/Root'

import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: UserLinksProps = {
    isLoggedIn: false,
    userName: '',
    doLogout: () => null,
  }

  ReactDOM.render(<Themed store={null}><UserLinks {...props}/></Themed>, div);
});
