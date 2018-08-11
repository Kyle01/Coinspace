import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import LocalBarFeatures from '../local_bar/local_bar'

class Trade extends React.Component {

  render(){
    return (
      <div>
        <LocalBarFeatures location="trade"/>
        <h3>`Hello from trade!`</h3>
      </div>
    );
  }
}

export default withRouter(Trade);
