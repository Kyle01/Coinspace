import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


const NavbarFeatures = props => {
  return props.currentUser ? (
    <div className="nav-bar">
      <p className="nav-logo">coinspace</p>
      <div className="nav-rt-el">
        <button className="nav-signout-button" onClick={props.logout}>Sign out</button>
        <p className="nav-username">{props.currentUser.username}</p>
      </div>
    </div>
  ) : (
    <div className="nav-bar">
      <a className="nav-logo">coinspace</a>
      <div className="nav-middle-el">
        <a className="nav-middle-text">Charts</a>
        <a className="nav-middle-text">About</a>
      </div>
      <div className="nav-rt-el">
        <Link className="nav-login" to='/login'>Log in</Link>
        <Link className="nav-signup" to='/signup'>Sign up</Link>
      </div>
    </div>
  );
};

export default withRouter(NavbarFeatures);
