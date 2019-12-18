import React from "react";
import "./App.css";
import signUp from "./components/signUp";
import { Route, Link } from "react-router-dom";
import LoginPage from "./components/logIn";
import GameRoom from "./components/lobby/gameroom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">LogIn</Link>
        <Link to="/lobby">Lobby</Link>
      </nav>
      <Route path="/signup" component={signUp} />
      <Route path="/login" component={LoginPage} />
      <Route path="/lobby" component={GameRoom} />
    </div>
  );
}

export default App;
