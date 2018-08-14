import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class PortfolioSum extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render(){
    return (
      <div>
        Your Portfolio
      </div>
    );
  }
}

export default withRouter(PortfolioSum);
