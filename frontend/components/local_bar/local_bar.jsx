import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';


class LocalBarFeatures extends React.Component {
  constructor(props){
    super(props)

  }

  imageOne() {
    if(this.props.location === "dashboard"){
      return window.images.selected_dash;
    } else {
      return window.images.unselected_dash;
    }
  }

  imageTwo() {
    if(this.props.location === "trade"){
      return window.images.selected_trade;
    } else {
      return window.images.unselected_trade;
    }
  }

  imageThree() {
    if(this.props.location === "account"){
      return window.images.selected_accounts;
    } else {
      return window.images.selected_accounts;
    }
  }

  wordClassOne(){
    if(this.props.location === "dashboard"){
      return "local-bar-words-selected";
    } else {
      return "local-bar-words-not-selected";
    }
  }

  wordClassTwo(){
    if(this.props.location === "trade"){
      return "local-bar-words-selected";
    } else {
      return "local-bar-words-not-selected";
    }
  }

  wordClassThree(){
    if(this.props.location === "account"){
      return "local-bar-words-selected";
    } else {
      return "local-bar-words-not-selected";
    }
  }

  render(){
    return (
      <div className="local-bar-main">
        <Link to="/dashboard" className="local-bar-link">
          <div className="local-bar-items">
            <img src={this.imageOne()} className="local-bar-img" />
            <p className={this.wordClassOne()}>Dashboard</p>
          </div>
        </Link>
        <Link to="/buy/btc" className="local-bar-link">
          <div className="local-bar-items">
            <img src={this.imageTwo()} className="local-bar-img" />
            <p className={this.wordClassTwo()}>Buy/Sell</p>
          </div>
        </Link>
        <Link to="/account" className="local-bar-link">
          <div className="local-bar-items">
            <img src={this.imageThree()} className="local-bar-img" />
            <p className={this.wordClassThree()}>Accounts</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default LocalBarFeatures
