import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import LocalBarFeatures from '../local_bar/local_bar'
import SmallGraphContainer from '../graphing/small_graph_container'

class Dashboard extends React.Component {

  render(){
    return (
      <div>
        <LocalBarFeatures location="dashboard"/>
        <SmallGraphContainer asset="Bitcoin"/>
        <SmallGraphContainer asset="Bitcoin Cash"/>
        <SmallGraphContainer asset="Ethereum"/>
        <SmallGraphContainer asset="Litecoin"/>
      </div>
    );
  }
}

export default withRouter(Dashboard);
