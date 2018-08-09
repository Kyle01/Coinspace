import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  handleDemoUser(e) {
    e.preventDefault();
    this.props.login({username:"Demo_User", password:"Password1"}).then(() => this.props.history.push("/dashboard"));
  }

  handleInput(type){
    return (e => {
      this.setState({[type]: e.target.value});
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push("/dashboard"));
  }

  render(){
    const err = this.props.errors.map((err, idx) => <li className="signin-error-el" key={idx}>{err}</li>)
    return (
      <div className="signin-main">
        <h2 className="signin-above-text">Sign in to Coinspace</h2>
        <form className="signin-submitform">
          <label>
            Username
            <input
              className="signin-field"
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleInput('username')}>
            </input>
          </label>
          <label>
            Password
            <input
              className="signin-field"
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleInput('password')}>
            </input>
          </label>
          <button className="signin-demo" onClick={this.handleDemoUser}>Demo</button>
          <button className="signin-button" onClick={this.handleSubmit}>SIGN IN</button>
        </form>
        <ul className="signin-error-container">
          {err}
        </ul>
      </div>
    );
  }
}

export default withRouter(LoginForm);
