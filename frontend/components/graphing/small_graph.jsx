import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SmallGraph extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Link to={this.props.asset}>
          Hello!
        </Link>
      </div>
    );
  }
}

export default withRouter(SmallGraph);
