import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class RecentActivity extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getTrades();
  }

  buildTradeItem(transaction){
    return (
      <div>
      </div>
    );
  }

  render(){
    console.log(this.props.transactions);
    return (
      <div>
        <div>
          Recent Activity
        </div>
        <div>
          {this.buildTradeItem(this.props)}
        </div>
        <div>
          View your Accounts
        </div>
      </div>
    );
  }
}

export default withRouter(RecentActivity);
