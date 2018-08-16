import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { LineChart, Line } from 'recharts';

class CoinSum extends React.Component {
  constructor(props){
    super(props);
  }

  getPic(coin){
    switch (this.props.coin) {
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

  getAbv(){
    switch (this.props.coin) {
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

  getWords(){

  }

  drawChart(){

  }

  getWords(coin){

  }

  getPrice(){

  }

  makeSmallAssets(){
    let otherCoins = this.returnOtherAssets();
    return (
      <div>
        {this.makeSmallAssetsHelper(otherCoins[0])}
        {this.makeSmallAssetsHelper(otherCoins[1])}
        {this.makeSmallAssetsHelper(otherCoins[2])}
      </div>
    );
  }

  makeSmallAssetsHelper(coin){
    return (
      <div>
      </div>
    );
  }

  //returns an array of the three other coins in correct order
  //used by makeSmallAssets
  returnOtherAssets(){
    return ["Litecoin", "Ethereum", "Bitcoin Cash"];
  }

  render(){
    return (
      <div>
        <div>
          <img src={this.getPic()} />
          <p></p>
        </div>
        <p>More Assets</p>
        {this.makeSmallAssets()}
      </div>
    );
  }
}

export default withRouter(CoinSum);
