// src/components/LoginPage.js
import React from "react";
import { connect } from "react-redux";
import { login } from "../store/login/actions";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  state = {
    user_name: "",
    password: ""
  };

  componentDidUpdate() {
    console.log(this.props.auth);
    if (this.props.auth.accessToken) {
      this.props.history.push("/lobby");
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const { user_name, password } = this.state;

    const action = login(user_name, password);
    this.props.dispatch(action);
    // this.setState({
    //   user_name: "",
    //   password: ""
    // });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome to the game</h1>
        <h2>Please login first</h2>
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
        <div>
          {" "}
          If you don't have an acount, please <Link to="/signup">Sign up</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(LoginPage);
