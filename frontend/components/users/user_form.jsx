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
    const err = this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)
    return (
      <div>
        <h2>Create your account</h2>
        <form>
          <label>
            Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}>
            </input>
          </label>
          <label>
            Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}>
            </input>
          </label>
          <button onClick={this.handleSubmit}>CREATE ACCOUNT</button>
        </form>
        <ul>
            {err}
        </ul>
      </div>
    );
  }
}

export default withRouter(UserForm);
