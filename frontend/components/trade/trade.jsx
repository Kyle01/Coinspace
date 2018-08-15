import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import LocalBarFeatures from '../local_bar/local_bar'

class Trade extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    return (
      <div>
        <LocalBarFeatures location="trade"/>
        <div>
          <form onSubmit={this.openTab}>
            <button type="button" onclick="window.location='{{ url("buy/btc") }}'">Buy</button>
            <button type="button" onclick="window.location='{{ url("sell/btc") }}'">Sell</button>
         </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Trade);
