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

  getPic(coin){
    if(coin === "btc") {
      return window.images.btc_logo;
    } else if(coin === "bch") {
      return window.images.btcc_logo;
    } else if(coin === "e") {
      return window.images.e_logo;
    } else if(coin === "ltc") {
      return window.images.ltc_logo;
    }
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
      <div className = 'trade-main-buy-container'>
        <div className ='trade-coin-buttons'>
          <button className='trade-coin-button' onClick={() => this.handleCoinClick('btc')}>
            <img src={this.getPic('btc')}/>
            <br></br>
            Bitcoin
          </button>
          <button className='trade-coin-button' onClick={() => this.handleCoinClick('bch')}>
            <img src={this.getPic('bch')}/>
            <br></br>
            Bitcoin Cash
          </button>
          <button className='trade-coin-button' onClick={() => this.handleCoinClick('e')}>
            <img src={this.getPic('e')}/>
            <br></br>
            Ethereum
          </button>
          <button className='trade-coin-button' onClick={() => this.handleCoinClick('ltc')}>
            <img src={this.getPic('ltc')}/>
            <br></br>
            Litcoin
          </button>
        </div>
        <form className="trade-buy-form-field" onSubmit={this.handleSubmit}>
          <input className='trade-buy-input-field' ref="amount"
                 value={this.state.amount}
                 placeholder="0.00 USD"
                 onChange={this.updateAmount(price)}/>
               <input className='trade-buy-input-field' ref="coins"
                value={this.state.coins}
                placeholder={`0.00 ${this.state.coins}`}
                onChange={this.updateCoins({price})}/>
              <button className='trade-buy-coin-button'>Buy {this.linkToWords()}</button>
        </form>
      </div>
    )
  }

  sellElements(){
    let price = this.getPrice();
    return (
      <div className='trade-sell-main'>
        <p className='trade-sell-words'>Sell From</p>
        <select className='trade-sell-select-coin'>
          <option value="Bitcoin">
            <img src={this.getPic('btc')}/>
            BTC Wallet {this.props.user.btc_holdings.toFixed(6)}
          </option>
          <option value="Bitcoin Cash">
            <img src={this.getPic("bch")}/>
            BCH Wallet {this.props.user.bch_holdings.toFixed(6)}
          </option>
          <option value="Ethereum">
            <img src={this.getPic("e")}/>
            ETC Wallet {this.props.user.e_holdings.toFixed(6)}
          </option>
          <option value="Litecoin">
            <img src={this.getPic("ltc")}/>
            LTC Wallet {this.props.user.ltc_holdings.toFixed(6)}
          </option>
        </select>
        <p>Amount</p>
          <form onSubmit={this.handleSubmit}>
            <div className='trade-sell-exchange-bar'>
              <input className='trade-sell-input-field' ref="amount"
                     value={this.state.amount}
                     placeholder="0.00 USD"
                     onChange={this.updateAmount(price)} />
             <img className='trade-sell-exchange-logo' src={window.images.transfer_logo} />
             <input className='trade-sell-input-field' ref="coins"
                    value={this.state.coins}
                    placeholder={`0.00 ${this.state.coins}`}
                    onChange={this.updateCoins(price)}/>
            </div>
              <button className='trade-sell-coin-button'>Sell {this.linkToWords()} Instantly</button>
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
      <div className='trade-main-background'>
        <LocalBarFeatures location="trade"/>
          <div className='trade-main-container'>
            <button onClick={this.changeTab} className='trade-buy-button' name="buy">Buy</button>
            <button onClick={this.changeTab} className='trade-sell-button' name="sell">Sell</button>
           {elements}
          </div>
      </div>
    );
    }
  }
}

export default withRouter(Trade);
