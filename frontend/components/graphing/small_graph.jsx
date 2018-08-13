import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { LineChart, Line } from 'recharts';

class SmallGraph extends React.Component {
  constructor(props){
    super(props)

    this.props.fetchRange();
    this.props.fetchPrice();
  }

  componentDidMount(){
    this.props.fetchRange();
    this.props.fetchPrice();
  }

  getDailyReturn(){
    if(this.props.price.prices !== undefined){
      if(this.props.asset === "Bitcoin"){
        let length = this.props.price.prices.bitcoin_prices.length;
        let last = this.props.price.prices.bitcoin_prices[length-1];
        let second = this.props.price.prices.bitcoin_prices[length-2];
        let answer = (((last-second)/last) * 100)
        return answer.toFixed(2);
      } else if(this.props.asset === "Bitcoin Cash") {
        let length = this.props.price.prices.bitcoin_cash_prices.length;
        let last = this.props.price.prices.bitcoin_cash_prices[length-1];
        let second = this.props.price.prices.bitcoin_cash_prices[length-2];
        let answer = (((last-second)/last) * 100)
        return answer.toFixed(2);
      } else if(this.props.asset === "Ethereum") {
        let length = this.props.price.prices.ethereum_prices.length;
        let last = this.props.price.prices.ethereum_prices[length-1];
        let second = this.props.price.prices.ethereum_prices[length-2];
        let answer = (((last-second)/last) * 100)
        return answer.toFixed(2);
      } else if(this.props.asset === "Litecoin") {
        let length = this.props.price.prices.litecoin_prices.length;
        let last = this.props.price.prices.litecoin_prices[length-1];
        let second = this.props.price.prices.litecoin_prices[length-2];
        let answer = (((last-second)/last) * 100)
        return answer.toFixed(2);
      }
    }
  }

  getPrice(){
    if(this.props.price.price !== undefined){
      if(this.props.asset === "Bitcoin") {
        return this.props.price.price.btc_price;
      } else if(this.props.asset === "Bitcoin Cash") {
        return this.props.price.price.btcc_price;
      } else if(this.props.asset === "Ethereum") {
        return this.props.price.price.e_price;
      } else if(this.props.asset === "Litecoin") {
        return this.props.price.price.ltc_price;
      }
    }
  }

  getPic(){
    if(this.props.price.price !== undefined){
      if(this.props.asset === "Bitcoin") {
        return "assets/btc_logo.png";
      } else if(this.props.asset === "Bitcoin Cash") {
        return "assets/btcc_logo.png";
      } else if(this.props.asset === "Ethereum") {
        return "assets/e_logo.png";
      } else if(this.props.asset === "Litecoin") {
        return "assets/ltc_logo.png";
      }
    }
  }

  getColor(){
    if(this.props.price.price !== undefined){
      if(this.props.asset === "Bitcoin") {
        return "#f7931a";
      } else if(this.props.asset === "Bitcoin Cash") {
        return "#478559";
      } else if(this.props.asset === "Ethereum") {
        return "#627EB2";
      } else if(this.props.asset === "Litecoin") {
        return "#d3d3d3";
      }
    }
  }

  getCleanData(){
    if(this.props.price.prices !== undefined){
      if(this.props.asset === "Bitcoin"){
        let answer = [];
        for(let k = 0; k < this.props.price.prices.bitcoin_prices.length; k++){
          let obj = {value: this.props.price.prices.bitcoin_prices[k]};
          answer.push(obj);
        }
        return answer;
      } else if (this.props.asset === "Bitcoin Cash") {
        let answer = [];
        for(let k = 0; k < this.props.price.prices.bitcoin_cash_prices.length; k++){
          let obj = {value: this.props.price.prices.bitcoin_cash_prices[k]};
          answer.push(obj);
        }
        return answer;
      } else if (this.props.asset === "Ethereum") {
        let answer = [];
        for(let k = 0; k < this.props.price.prices.ethereum_prices.length; k++){
          let obj = {value: this.props.price.prices.ethereum_prices[k]};
          answer.push(obj);
        }
        return answer;
      } else if (this.props.asset === "Litecoin") {
        let answer = [];
        for(let k = 0; k < this.props.price.prices.litecoin_prices.length; k++){
          let obj = {value: this.props.price.prices.litecoin_prices[k]};
          answer.push(obj);
        }
        return answer;
      }
    }
  }

  makeChart(){
    if(this.props.price.prices !== undefined){
      return (
        <LineChart width={300} height={100} data={this.getCleanData()}>
          <Line type='monotone' dataKey='value' stroke={this.getColor()} strokeWidth={2} />
        </LineChart>
      );
    }
  }

  render(){
    return (
      <div>
        <Link to={this.props.asset}>
          <div>
            <img src={this.getPic()}/>
            <p>{this.props.asset}</p>
            <p>30D</p>
          </div>
          <div>
            <p>${this.getPrice()}</p>
            <p>{this.getDailyReturn()}%</p>
          </div>
          {this.makeChart()}
        </Link>
      </div>
    );
  }
}

export default withRouter(SmallGraph);
