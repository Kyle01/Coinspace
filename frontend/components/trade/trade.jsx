import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import LocalBarFeatures from '../local_bar/local_bar'

class Trade extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      amount: "",
      coins: "",
      done:false,
      active: "buy"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }

  updateAmount(coin_value){
    return e => this.setState({['amount']: e.target.value, ['coins']: e.target.value/coin_value})
  }

  updateCoins(coin_value){
    return e => this.setState({['coins']: e.target.value, ['amount']: e.target.value*coin_value})
  }

  componentDidMount(){
    this.props.fetchPrice()
  }

  getPrice(){
    switch (this.props.coin) {
      case 'btc':
        return this.props.price.price.btc_price;
      case 'e':
        return this.props.price.price.e_price;
      case 'ltc':
        return this.props.price.price.ltc_price;
      case 'bch':
        return this.props.price.price.btcc_price;
    }
  }

  handleCoinClick(coin){
    this.setState({amount: "", coins: ""}, () => this.props.history.push(`/buy/${coin}`));
  }

  buyElements(){
    let price = this.getPrice();
    return (
      <div>
        <button onClick={() => this.handleCoinClick('btc')}>Bitcoin</button>
        <button onClick={() => this.handleCoinClick('bch')}>Bitcoin Cash</button>
        <button onClick={() => this.handleCoinClick('e')}>Ethereum</button>
        <button onClick={() => this.handleCoinClick('ltc')}>Litecoin</button>
        <form onSubmit={this.handleSubmit}>
          <input ref="amount"
                 value={this.state.amount}
                 placeholder="0.00 USD"
                 onChange={this.updateAmount(price)}/>
               <input ref="coins"
                value={this.state.coins}
                placeholder={`0.00 ${this.state.coins}`}
                onChange={this.updateCoins({price})}/>
              <button>Buy {this.linkToWords()}</button>
        </form>
      </div>
    )
  }

  sellElements(){
    let price = this.getPrice();
    return (
      <div>
        Sell From
        <select>
          <option value="Bitcoin">Bitcoin {this.props.user.btc_holdings.toFixed(6)}</option>
          <option value="Bitcoin Cash">Bitcoin Cash {this.props.user.bch_holdings.toFixed(6)}</option>
          <option value="Ethereum">Ethereum {this.props.user.e_holdings.toFixed(6)}</option>
          <option value="Litcoin">Litecoin {this.props.user.ltc_holdings.toFixed(6)}</option>
        </select>
        <p>Amount</p>
          <form onSubmit={this.handleSubmit}>
            <input ref="amount"
                   value={this.state.amount}
                   placeholder="0.00 USD"
                   onChange={this.updateAmount(price)}/>
                 <input ref="coins"
                  value={this.state.coins}
                  placeholder={`0.00 ${this.state.coins}`}
                  onChange={this.updateCoins(price)}/>
                <button>Sell {this.linkToWords()} Instantly</button>
          </form>
      </div>
    );
  }

  handleSubmit(e){
    e.preventDefault();
    let buying = false;
    if(this.state.active === "buy") buying = true;
    this.props.trade({buy: buying, coin: this.linkToWords(), price: this.state.amount, user_id: this.props.user.id, size: this.state.coins })
  }

  linkToWords(){
    switch (this.props.coin) {
      case 'btc':
        return "Bitcoin";
      case 'e':
        return "Ethereum";
      case 'ltc':
        return "Litecoin";
      case 'bch':
        return "Bitcoin Cash";
    }
  }

  changeTab(e){
    e.preventDefault
    if(e.target.name === 'sell'){
      this.setState({active: 'sell'}).then(() => this.props.history.push("/sell/btc"));
    } else {
      this.setState({active: 'buy'}).then(() => this.props.history.push("/buy/btc"));
    }

  }

  render(){
    let elements = ""
    if(this.props.price.price === undefined){
      return (<div>Loading..</div>)
    } else {


    if(this.state.active === "buy"){
      elements = this.buyElements();
    } else elements = this.sellElements();

    return (
      <div>
        <LocalBarFeatures location="trade"/>
        <div>
          <button onClick={this.changeTab} name="buy">Buy</button>
          <button onClick={this.changeTab} name="sell">Sell</button>
         {elements}
        </div>
      </div>
    );
    }
  }
}

export default withRouter(Trade);
