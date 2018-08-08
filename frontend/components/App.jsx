import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import UserFormContainer from './users/user_form_container';

const App = () => (
  <div>
    <h1>Coinbase</h1>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={UserFormContainer} />
  </div>
);

export default App;
