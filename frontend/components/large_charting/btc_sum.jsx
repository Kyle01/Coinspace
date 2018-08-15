import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { LineChart, Line } from 'recharts';

class BtcSum extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>Hello from Bitcoin summary</div>
    );
  }
}

export default withRouter(BtcSum);
