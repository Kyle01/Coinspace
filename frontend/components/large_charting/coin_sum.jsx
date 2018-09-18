import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { AreaChart, Area, LineChart, Tooltip } from 'recharts';

import LocalBarFeatures from '../local_bar/local_bar'

class CoinSum extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchRange();
    this.props.fetchPrice()
  }

  getPic(coin = this.props.coin){
    switch (coin) {
      case 'Bitcoin':
        return window.images.btc_logo;;
      case 'Ethereum':
        return window.images.e_logo;
      case 'Litecoin':
        return window.images.ltc_logo;
      case 'Bitcoin Cash':
        return window.images.btcc_logo;
    }
  }

  getAbv(coin = this.props.coin){
    switch (coin) {
      case 'Bitcoin':
        return "BTC";
      case 'Ethereum':
        return "ETH";
      case 'Litecoin':
        return "LTC";
      case 'Bitcoin Cash':
        return "BCH";
    }
  }

  getWords(coin = this.props.coin){
    switch (coin) {
      case 'Bitcoin':
        return (<p className="asset-description">The world’s first cryptocurrency, bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis — each satoshi is worth 0.00000001 bitcoin.</p>);
      case 'Ethereum':
        return (<p className="asset-description">Ethereum is both a cryptocurrency and a decentralized computing platform. Developers can use Ethereum to create decentralized applications and issue new assets, known as tokens.</p>);
      case 'Litecoin':
        return (<p className="asset-description">Litecoin is a cryptocurrency that uses a faster payment confirmation schedule and a different cryptographic algorithm than Bitcoin.</p>);
      case 'Bitcoin Cash':
        return (<p className="asset-description">Bitcoin Cash is fork of Bitcoin that seeks to add more transaction capacity to the network in order to be useful for everyday transactions.</p>);
    }
  }

  drawChart(){
    return (
      <AreaChart width={window.innerWidth-50} height={200} data={this.getCleanData()}>
        <Area type='monotone' dataKey='value' stroke='#8884d8' strokeWidth={2} fill='#F4F7FA' />
        <Tooltip />
      </AreaChart>
    );
  }

  //not implemented
  customToolTip(){

  }

  getPrice(coin = this.props.coin){
    if(this.props.price.price.btc_price !== undefined) {
      switch (coin) {
        case 'Bitcoin':
          return this.props.price.price.btc_price;
        case 'Litecoin':
          return this.props.price.price.ltc_price;
        case 'Bitcoin Cash':
          return this.props.price.price.btcc_price;
        case 'Ethereum':
          return this.props.price.price.e_price;
      }
    }
  }

  getHoldings(){
    let holdings = -1;
    let amount = -1;

    switch (this.props.coin) {
      case 'Bitcoin':
        holdings = (this.props.user.btc_holdings).toFixed(4);
        amount = (this.props.price.price.btc_price * this.props.user.btc_holdings).toFixed(2);
        return (
          <div className ='assets-total-holdings'>
            <p className='assets-your-balance-coins'>{holdings} {this.getAbv()}</p>
            <p className='assets-holdings-dollars'>(${amount})</p>
          </div>
        );
      case 'Ethereum':
        holdings = (this.props.user.e_holdings).toFixed(4);
        amount = (this.props.price.price.e_price * this.props.user.e_holdings).toFixed(2);
        return (
          <div>
            <p>{holdings} {this.getAbv()} </p>
            <p>(${amount})</p>
          </div>
        );
      case 'Litecoin':
        holdings = (this.props.user.ltc_holdings).toFixed(4);
        amount = (this.props.price.price.ltc_price * this.props.user.ltc_holdings).toFixed(2);
        return (
          <div>
            <p>{holdings} {this.getAbv()} </p>
            <p>(${amount})</p>
          </div>
        );
      case 'Bitcoin Cash':
        holdings = (this.props.user.btc_holdings).toFixed(4);
        amount = (this.props.price.price.btcc_price * this.props.user.bch_holdings).toFixed(2);
        return (
          <div>
            <p>{holdings} {this.getAbv()} </p>
            <p>(${amount})</p>
          </div>
        );
    }
    this.props.user.btc_holdings

  }

  makeSmallAssets(){
    let otherCoins = this.returnOtherAssets();
    return (
      <div className ="asset-bottom-bar">
        {this.makeSmallAssetsHelper(otherCoins[0])}
        {this.makeSmallAssetsHelper(otherCoins[1])}
        {this.makeSmallAssetsHelper(otherCoins[2])}
      </div>
    );
  }

  makeSmallAssetsHelper(coin){
    return (
      <Link to={`/assets/${coin}`} className='asset-link'>
      <div className="asset-link-box">
        <div className="asset-link-name">
          <img src={this.getPic(coin)} />
          <div className="asset-link-name-details">
            <p>{coin} ({this.getAbv(coin)})</p>
            <p className="asset-link-price">${this.getPrice(coin)}</p>
          </div>
        </div>
        {this.getWords(coin)}
      </div>
      </Link>
    );
  }

  //returns an array of the three other coins in correct order
  //used by makeSmallAssets
  returnOtherAssets(){
    switch (this.props.coin) {
      case 'Bitcoin':
        return ["Litecoin", "Ethereum", "Bitcoin Cash"];
      case 'Ethereum':
        return ["Bitcoin", "Litecoin", "Bitcoin Cash"];
      case 'Litecoin':
        return ["Bitcoin", "Ethereum", "Bitcoin Cash"];
      case 'Bitcoin Cash':
        return ["Bitcoin", "Litecoin", "Ethereum"];
    }
  }

  //used for charting
  getCleanData(){
    if(this.props.price.prices !== undefined) {
      if(this.props.coin === "Bitcoin"){
        let answer = [];
        for(let k = 0; k < this.props.price.prices.bitcoin_prices.length; k++){
          let obj = {value: this.props.price.prices.bitcoin_prices[k]};
          answer.push(obj);
        }
        return answer;
      } else if (this.props.coin === "Bitcoin Cash") {
        let answer = [];
        for(let k = 0; k < this.props.price.prices.bitcoin_cash_prices.length; k++){
          let obj = {value: this.props.price.prices.bitcoin_cash_prices[k]};
          answer.push(obj);
        }
        return answer;
      } else if (this.props.coin === "Ethereum") {
        let answer = [];
        for(let k = 0; k < this.props.price.prices.ethereum_prices.length; k++){
          let obj = {value: this.props.price.prices.ethereum_prices[k]};
          answer.push(obj);
        }
        return answer;
      } else if (this.props.coin === "Litecoin") {
        let answer = [];
        for(let k = 0; k < this.props.price.prices.litecoin_prices.length; k++){
          let obj = {value: this.props.price.prices.litecoin_prices[k]};
          answer.push(obj);
      }
      return answer;
    }
  }
}
  render(){
    if(this.props.price.price === undefined){
      return (<div>Loading...</div>)
    } else {
      return (
        <div>
          <LocalBarFeatures location="dashboard"/>
          <div className="asset-main">
            <div className="asset-top-bar">
              <img src={this.getPic()}/>
              <div className="asset-top-name-group">
                <p className="asset-top-name">{this.props.coin} </p>
                <p className="asset-top-abv">{this.getAbv()}</p>
              </div>
              <div className="asset-top-right">
                <div className="asset-top-holding-info">
                  <p className='assets-your-balance'>YOUR BALANCE</p>
                  {this.getHoldings()}
                </div>
                <div className='asset-trade-parent'>
                  <Link to={`/buy/${this.getAbv().toLowerCase()}`} className='asset-trade-link-buy'><p>Buy</p></Link>
                  <Link to={`/sell/${this.getAbv().toLowerCase()}`} className='asset-trade-link'><p>Sell</p></Link>
                </div>
              </div>
            </div>
            <div className="asset-self-description">
              <p className='asset-price'>${this.getPrice()}</p>
              {this.drawChart()}
              <p className="asset-self-description-about">About {this.props.coin}</p>
              {this.getWords()}
            </div>

            <p>More Assets</p>
            {this.makeSmallAssets()}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(CoinSum);
