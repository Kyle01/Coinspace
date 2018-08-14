import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class PortfolioSum extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPrice();
  }

  getPicture(coin){
    switch (coin) {
      case "Bitcoin":
        return "assets/btc_logo.png";
      case "Litecoin":
        return "assets/ltc_logo.png";
      case "Bitcoin Cash":
        return "assets/btcc_logo.png";
      case "Ethereum":
        return "assets/e_logo.png";
    }
  }

  getColor(coin){
    switch (coin) {
      case "Bitcoin":
        return "#f7931a";
      case "Litecoin":
        return "#d3d3d3";
      case "Bitcoin Cash":
        return "#478559";
      case "Ethereum":
        return "#627EB2";
    }
  }

  //returns portfolio in USD. Used to display order and rank position size
  total_holdings(){

  }

  //last line item of container. Returns a div.
  total_holding_item(){
    return (
      <div>
        Total Balance ≈ ${this.total_holdings()}
      </div>
    )
  }

  portfolioItem(holding){
    return (
      <div>
      </div>
    )
  }

  //Returns a Key Value object with the following informat
  // {1: {'Ethereum': 0.62340}, 2: {'Bitcoin': 0.09}, 3: }
  orderHoldings(){

  }

  render(){
    let orderHoldings = this.orderHoldings();
    return (
      <div>
        <div>
          Your Portfolio
        </div>

        <div>
        {this.total_holding_item()}
        </div>
      </div>
    );
  }
}

export default withRouter(PortfolioSum);
