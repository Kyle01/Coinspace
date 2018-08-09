import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type){
    return (e => {
      this.setState({[type]: e.target.value});
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.history.push("/dashboard"));
  }

  render(){
    const err = this.props.errors.map((err, idx) => <li className="signup-error-el" key={idx}>{err}</li>)
    return (
      <div className="signup-main">
        <h2 className="signup-above-text">Create your account</h2>
        <form className="signup-submitform">
          <label>
            Username
            <input
              className="signup-field"
              type="text"
              value={this.state.username}
              placeholder="username"
              onChange={this.handleInput('username')}>
            </input>
          </label>
          <label>
            Password
            <input
              className="signup-field"
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleInput('password')}>
            </input>
          </label>
          <button className="signup-button" onClick={this.handleSubmit}>CREATE ACCOUNT</button>
        </form>
        <ul className="signup-error-container">
            {err}
        </ul>
      </div>
    );
  }
}

export default withRouter(UserForm);
