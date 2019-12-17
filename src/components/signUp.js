import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../store/signUp/actions";

class SignUp extends Component {
  state = {
    user_name: "",
    password: ""
  };

  handleChange = event => {
    const nameOfImputField = event.target.name;
    const valueOfImputField = event.target.value;

    this.setState({ [nameOfImputField]: valueOfImputField });

    // console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();

    const { user_name, password } = this.state;

    const action = signUp(user_name, password);

    this.props.dispatch(action);
  };

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="user_name"
            placeholder="player name"
            type="text"
            onChange={this.handleChange}
            value={this.state.user_name}
          />

          <input
            name="password"
            placeholder="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect()(SignUp);
