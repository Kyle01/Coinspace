import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import UserFormContainer from './users/user_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import TradeContainer from './trade/trade_container';
import AccountContainer from './account/account_container'
import NavbarContainer from './navigation_bar/navbar_container';
import Coinsum from './large_charting/coin_sum_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NotFound from './not_found/not_found';



const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <Switch>
      <Route exact path ="/" />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={UserFormContainer} />
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
      <ProtectedRoute exact path="/buy/:coin" component={TradeContainer} />
      <ProtectedRoute exact path="/sell/:coin" component={TradeContainer} />
      <ProtectedRoute exact path="/account" component={AccountContainer} />
      <ProtectedRoute exact path="/assets/:coin" component={Coinsum} />
      <Route path="/*" component={NotFound}></Route>
    </Switch>
  </div>
);

export default App;
