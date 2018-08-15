import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import LocalBarFeatures from '../local_bar/local_bar'
import SmallGraphContainer from '../graphing/small_graph_container'
import RecentActivityContainer from '../recent_activity/recent_activity_container';
import PortfolioSummaryContainer from '../portfolio_sum/portfolio_sum_container'

class Dashboard extends React.Component {

  render(){
    return (
      <div>
        <LocalBarFeatures location="dashboard"/>
        <div className="dash-wrapper">
          <SmallGraphContainer asset="Bitcoin" className="dash-chart-1"/>
          <SmallGraphContainer asset="Bitcoin Cash" className="dash-chart-2"/>
          <SmallGraphContainer asset="Ethereum" className="dash-chart-3"/>
          <SmallGraphContainer asset="Litecoin" className="dash-chart-4"/>
        </div>
        <div className="dash-bottom">
          <RecentActivityContainer className="dash-recent-activity"/>
          <PortfolioSummaryContainer className="dash-port-sum"/>
        </div>
    </div>
    );
  }
}

export default withRouter(Dashboard);
