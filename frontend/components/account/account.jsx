import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import LocalBarFeatures from '../local_bar/local_bar'

class Account extends React.Component {

  render(){
    return (
      <div>
        <LocalBarFeatures location="account"/>
        <h3>`Hello from account!`</h3>
      </div>
    );
  }
}

export default withRouter(Account);
