import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


const NavbarFeatures = props => {
  return props.currentUser ? (
    <div>
      <p>coinspace</p>
      <button onClick={props.logout}>Sign out</button>
      <p>{props.currentUser.username}</p>
    </div>
  ) : (
    <div>
      <a>Coinspace</a>
      <a>Charts</a>
      <a>About</a>
      <Link to='/login'>Log in</Link>
      <Link to='/signup'>Sign up</Link>
    </div>
  );
};

export default withRouter(NavbarFeatures);
