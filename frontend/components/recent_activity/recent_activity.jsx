import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class RecentActivity extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getTrades();
  }

  componentWillReceiveProps(newProps){
    debugger;
    if(this.props.transactions.length != newProps.transactions.length){
      this.props.getTrades();
    }
  }

  getImage(transaction){
    if(transaction.coin === "Bitcoin"){
      return "assets/transactions/bitcoin-tran.png";
    } else if(transaction.coin === "Bitcoin Cash"){
      return "assets/transactions/bitcoincash-tran.png";
    } else if(transaction.coin === "Ethereum"){
      return "assets/transactions/ethereum-tran.png";
    } else if(transaction.coin === "Litecoin"){
      return "assets/transactions/litecoin-tran.png";
    }
  }

  getWords(transaction){
    let answer = "";

    if(transaction.buy) answer += "Bought "
    else answer += "Sold "

    answer += transaction.coin

    return answer;
  }

  getAmount(transaction){
    let answer = "";
    if(transaction.buy) answer += "+";
    else answer += "=";
    answer += transaction.size.toFixed(6);
    switch (transaction.coin) {
      case "Bitcoin":
        answer += " BTC";
        break;
      case "Ethereum":
        answer += " ETH";
        break;
      case "Bitcoin Cash":
        answer += " BCH";
        break;
      case "Litecoin":
        answer += " LTC";
        break;
    }
    return answer;
  }

  getMoney(transaction){
    let answer = "";
    if(transaction.buy) answer += "+$";
    else answer += "-$";
    answer += transaction.price;
    return answer;
  }

  buildTradeItem(transaction){
    if(transaction === undefined){
      return (<div></div>)
    } else {
      let date = new Date(transaction.created_at);
      let monthHelper = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return (
        <div className="tran-sum-tran-container">
          <Link to="/dashboard" className="tran-sum-link">
            <div>
              <div>{monthHelper[date.getMonth()]}</div>
              <div>{date.getDate()}</div>
            </div>
            <div>
              <img src={this.getImage(transaction)} className="tran-sum-img"></img>
            </div>
            <div>
              <p>{this.getWords(transaction)}</p>
            </div>
            <div>
              <div>{this.getAmount(transaction)}</div>
              <div>{this.getMoney(transaction)}</div>
            </div>
          </Link>
        </div>
      );
    }
  }

  render(){
    let keys = Object.keys(this.props.transactions);
    let firstTransaction = this.props.transactions[keys[keys.length-1]];
    let secondTransaction = this.props.transactions[keys[keys.length-2]];
    let thirdTransaction = this.props.transactions[keys[keys.length-3]];
    let fourthTransaction = this.props.transactions[keys[keys.length-4]];
    return (
      <div className="tran-sum-main-container">
        <div>
          Recent Activity
        </div>
        <div>
          {this.buildTradeItem(firstTransaction)}
        </div>
        <div>
          {this.buildTradeItem(secondTransaction)}
        </div>
        <div>
          {this.buildTradeItem(thirdTransaction)}
        </div>
        <div>
          {this.buildTradeItem(fourthTransaction)}
        </div>
        <div>
          View your Accounts
        </div>
      </div>
    );
  }
}

export default withRouter(RecentActivity);
