import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import LocalBarFeatures from '../local_bar/local_bar'
import SmallGraphContainer from '../graphing/small_graph_container'

class Dashboard extends React.Component {

  render(){
    return (
      <div>
        <LocalBarFeatures location="dashboard"/>
        <h3>`Hello from dashboard!`</h3>
        <SmallGraphContainer asset="Bitcoin"/>
        <SmallGraphContainer asset="Ethereum"/>
        <SmallGraphContainer asset="Litecoin"/>
        <SmallGraphContainer asset="Bitcoin_cash"/>
      </div>
    );
  }
}

export default withRouter(Dashboard);
