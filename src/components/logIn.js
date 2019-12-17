// src/components/LoginPage.js
import React from "react";
import { connect } from "react-redux";
import { login } from "../store/login/actions";

class LoginPage extends React.Component {
  state = {
    user_name: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    const { user_name, password } = this.state;

    const action = login(user_name, password);
    this.props.dispatch(action);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="user_name"
              name="user_name"
              placeholder="user_name"
              value={this.state.user_name}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
      </div>
    );
  }
}

export default connect()(LoginPage);
