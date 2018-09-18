import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { LineChart, Line, YAxis } from 'recharts';

class SmallGraph extends React.Component {
  constructor(props){
    super(props);
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
        return window.images.btc_logo;
      } else if(this.props.asset === "Bitcoin Cash") {
        return window.images.btcc_logo;
      } else if(this.props.asset === "Ethereum") {
        return window.images.e_logo;
      } else if(this.props.asset === "Litecoin") {
        return window.images.ltc_logo;
        // <img src={window.images.ltc_logo}/>
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

  getRange(){
    let min = 0;
    let max = 0;
    if(this.props.price.prices !== undefined){
      if(this.props.asset === "Bitcoin"){
        max = Math.max(...this.props.price.prices.bitcoin_prices);
        min = Math.min(...this.props.price.prices.bitcoin_prices);
      } else if (this.props.asset === "Bitcoin Cash") {
        max = Math.max(...this.props.price.prices.bitcoin_cash_prices);
        min = Math.min(...this.props.price.prices.bitcoin_cash_prices);
      } else if (this.props.asset === "Ethereum") {
        max = Math.max(...this.props.price.prices.ethereum_prices);
        min = Math.min(...this.props.price.prices.ethereum_prices);
      } else if (this.props.asset === "Litecoin") {
        max = Math.max(...this.props.price.prices.litecoin_prices);
        min = Math.min(...this.props.price.prices.litecoin_prices);
      }

      return [min*.95, max*1.05];
    }
  }

  makeChart(){
    if(this.props.price.prices !== undefined){
      return (
        <LineChart width={window.innerWidth/4-45} height={100} data={this.getCleanData()}>
          <Line type='monotone' dataKey='value' stroke={this.getColor()} strokeWidth={2} />
          <YAxis hide='true' type='number' domain={this.getRange()} />
        </LineChart>
      );
    }
  }

  render(){
    return <div className="sc-main-container">
        <Link to={`/assets/${this.props.asset}`} className="sc-link">
          <div className="sc-top-line">
            <img src={this.getPic()} className="sc-coin-logo" />
            <p className="sc-name">{this.props.asset}</p>
            <p className="sc-duration-box">30D</p>
          </div>
          <div className="sc-money-line">
            <p className="sc-money-dollar">${this.getPrice()}</p>
            <p className="sc-money-percent">{this.getDailyReturn()}%</p>
          </div>
          {this.makeChart()}
        </Link>
      </div>;
  }
}

export default withRouter(SmallGraph);
