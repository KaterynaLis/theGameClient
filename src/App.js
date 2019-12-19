import React, { Component } from "react";
import "./App.css";
import signUp from "./components/signUp";
import { Route, Link } from "react-router-dom";
import LoginPage from "./components/logIn";
import GameRoom from "./components/lobby/gameroom";
import Room from "./components/lobby/room";
import { connect } from "react-redux";

class App extends Component {
  url = "http://localhost:4000";
  stream = new EventSource(`${this.url}/stream`);

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      console.log("action", action);
      this.props.dispatch(action);
    };
  }

  render() {
    return (
      <div className="App">
        <nav>
          {/* <Link to="/signup">Sign up</Link> */}
          {/* <Link to="/login">LogIn</Link> */}
          {/* <Link to="/lobby">Lobby</Link> */}
        </nav>
        <Route path="/signup" component={signUp} />
        <Route path="/lobby" component={GameRoom} />
        <Route path="/room" component={Room} /> {/*should be /lobby/:room */}
        <Route exact path="/" component={LoginPage} />
      </div>
    );
  }
}

export default connect()(App);
