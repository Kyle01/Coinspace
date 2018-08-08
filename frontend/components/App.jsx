import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import UserFormContainer from './users/user_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import NavbarContainer from './navigation_bar/navbar_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={UserFormContainer} />
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
    </Switch>
  </div>
);

export default App;
