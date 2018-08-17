import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class PortfolioSum extends React.Component {
  constructor(props){
    super(props);

    this.portfolioItem = this.portfolioItem.bind(this);
  }

  componentDidMount(){
    this.props.fetchPrice();
  }

  willReceiveProps(newProps){
    if(this.props.price.price.btc_price === undefined){
      this.props.fetchPrice();
    }
  }

  getPicture(coin){
    switch (coin) {
      case "Bitcoin":
        return window.images.btc_logo;
      case "Litecoin":
        return window.images.ltc_logo;
      case "Bitcoin Cash":
        return window.images.btcc_logo;
      case "Ethereum":
        return window.images.e_logo;
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
    let sum = 0;
    sum += this.props.price.price.btc_price * this.props.user.btc_holdings;
    sum += this.props.price.price.e_price * this.props.user.e_holdings;
    sum += this.props.price.price.ltc_price * this.props.user.ltc_holdings;
    sum += this.props.price.price.btcc_price * this.props.user.bch_holdings;
    return sum.toFixed(2);
  }

  //last line item of container. Returns a div.
  total_holding_item(){
    return (
      <div className='port-sum-total-holdings'>
        Total Balance ≈ ${this.total_holdings()}
      </div>
    )
  }

  getPercentageInfo(amount){
    return (amount / this.total_holdings() * 100).toFixed(2);
  }

  portfolioItem(holding){
    let coin = Object.keys(holding);
    let amount = holding[coin];
    coin = coin[0];
    return (
      <div className="port-sum-component-main">
        <img src={this.getPicture(coin)}/>
        <p>{coin}</p>
        <p>{this.getPercentageInfo(amount)}%</p>
        <p>{this.getCoinClean(coin)}</p>
        <p className='port-sum-amount'>${amount.toFixed(2)}</p>
      </div>
    )
  }

  getCoinClean(coin){
    switch (coin) {
      case "Bitcoin":
        return `${this.props.user.btc_holdings.toFixed(2)} BTC`
      case "Litecoin":
        return `${this.props.user.ltc_holdings.toFixed(2)} LTC`
      case "Bitcoin Cash":
        return `${this.props.user.bch_holdings.toFixed(2)} BCH`
      case "Ethereum":
        return `${this.props.user.e_holdings.toFixed(2)} ETH`
    }
  }

  //Returns a Key Value object with the following informat
  // {1: {'Ethereum': 0.62340}, 2: {'Bitcoin': 0.09}, 3: }
  orderHoldings(){
    let answer = {1: null, 2: null, 3: null, 4: null};
    let b = {"Bitcoin": this.props.price.price.btc_price * this.props.user.btc_holdings};
    let e = {"Ethereum": this.props.price.price.e_price * this.props.user.e_holdings};
    let bc = {"Bitcoin Cash": this.props.price.price.btcc_price * this.props.user.bch_holdings};
    let l = {"Litecoin": this.props.price.price.ltc_price * this.props.user.ltc_holdings};
    let sortable = [];
    sortable.push(b, e, bc, l);
    sortable.sort(function(a, b){
      return a[1] - b[1];
    });

    return sortable
  }

  render(){
    if(this.props.price.price){
      let k = this.orderHoldings();
      this.portfolioItem(k[0]);
      return (
        <div className="port-sum-main-container">
          <div className='port-sum-top-line'>
            Your Portfolio
          </div>
          {this.portfolioItem(k[0])}
          {this.portfolioItem(k[1])}
          {this.portfolioItem(k[2])}
          {this.portfolioItem(k[3])}
          {this.total_holding_item()}
        </div>
      );
    } else {
      return (
        "loading"
      );
    }
  }
}

export default withRouter(PortfolioSum);
