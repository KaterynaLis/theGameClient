import React from "react";
import "./App.css";
import signUp from "./components/signUp";
import { Route, Link } from "react-router-dom";
import LoginPage from "./components/logIn";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">LogIn</Link>
      </nav>

      <Route path="/signup" component={signUp} />
      <Route path="/login" component={LoginPage} />
    </div>
  );
}

export default App;
