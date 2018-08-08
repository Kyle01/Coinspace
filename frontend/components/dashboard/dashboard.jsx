import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class Dashboard extends React.Component {

  render(){
    return (
      <h3>`Hello from dashboard!`</h3>
    );
  }
}

export default withRouter(Dashboard);
