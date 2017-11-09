import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import { ViewPage } from '../helpers/urlHelper';

import App from './App'
import RequireAuthWrapper from '../containers/RequireAuthWrapper'
import LoginPage from '../pages/Login'
import HomePage from '../pages/Home'
import NotFoundPage from '../pages/NotFound'
import AgentDashboardPage from '../pages/AgentDashboard'
import AgentControlPage from '../pages/AgentControl'

export default (
  <Route path="/" component={App}>
    <Route path="/login" component={LoginPage} />
    <Route component={RequireAuthWrapper}>
      <IndexRoute component={HomePage}/>
      <Route path="/agent/:agent_id" component={AgentDashboardPage} />
      <Route path={`/agent/:agent_id/${ViewPage.CONTROL}`} component={AgentControlPage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route >
)
