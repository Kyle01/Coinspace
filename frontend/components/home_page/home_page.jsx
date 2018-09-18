import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import SmallGraphContainer from '../graphing/small_graph_container'

class HomePage extends React.Component {

  render(){
    return <div className="home-main-div">
        <div className="home-intro-div">
          <p className="home-intro-line">
            Buy and sell paper digital currency
          </p>
          <p className="home-second-line">
            Welcome to my clone of coinbase.com.<br />
          Powered by Ruby on Rails and React.<br />
          Written by Kyle McVeigh
          </p>
          <Link to="/login" className="home-login-button">
            Get Started
          </Link>
        </div>
        <div className="home-chart-container">
          <SmallGraphContainer asset="Bitcoin" />
          <SmallGraphContainer asset="Bitcoin Cash" />
          <SmallGraphContainer asset="Ethereum" />
          <SmallGraphContainer asset="Litecoin" />
        </div>
      </div>;
  }
}

export default withRouter(HomePage);
