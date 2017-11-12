import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import { ViewPage } from '../helpers/urlHelper';

import App from './App'
import RequireAuthWrapper from '../containers/RequireAuthWrapper'
import LoginPage from '../pages/Login'
// import HomePage from '../pages/Home'
import NotFoundPage from '../pages/NotFound'
import InventoryPage from '../pages/InventoryPage'

export default (
  <Route path="/" component={App}>
    <Route path="/login" component={LoginPage} />
    <Route component={RequireAuthWrapper}>
      <IndexRoute component={InventoryPage}/>
      <Route path="/emp/:employee_id" component={InventoryPage} />
      <Route path={`/emp/:employee_id/${ViewPage.INVENTORY}`} component={InventoryPage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route >
)
