import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import { ViewPage } from '../helpers/urlHelper';

import App from './App'
import RequireAuthWrapper from '../containers/RequireAuthWrapper'
import LoginPage from '../pages/Login'
import HomePage from '../pages/Home'
import NotFoundPage from '../pages/NotFound'
import DashboardPage from '../pages/DashboardPage'

export default (
  <Route path="/" component={App}>
    <Route path="/login" component={LoginPage} />
    <Route component={RequireAuthWrapper}>
      <IndexRoute component={HomePage}/>
      <Route path="/emp/:employee_id" component={DashboardPage} />
      <Route path={`/emp/:employee_id/${ViewPage.DASHBOARD}`} component={DashboardPage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route >
)
