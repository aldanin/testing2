import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Root from './init/Root'
import { Router } from 'react-router'
import routes from './init/routes'
import configureStore from './state/configureStore'

import { browserHistory as history } from 'react-router'

// tslint:disable-next-line:no-console
// console.log(`Dashboard client version: ${versionInfo.version} build ${versionInfo.build}`)

const store = configureStore({})

ReactDOM.render(
  (
    <Root store={store}>
      <Router history={history} routes={routes} />
    </Root>
  ),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
