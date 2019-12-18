import React, { Component } from "react";
import superagent from "superagent";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class GameRoom extends Component {
  url = "http://localhost:4000";

  stream = new EventSource(`${this.url}/stream`);

  state = {
    text: "",
    gamerooms: []
  };

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      console.log("action", action);

      const { type, payload } = action;

      switch (type) {
        case "ALL_GAMEROOMS": {
          return this.setState({
            gamerooms: payload
          });
        }
        case "NEW_GAMEROOM": {
          const gamerooms = [...this.state.gamerooms, payload];

          return this.setState({
            gamerooms
          });
        }
        default:
          console.log("Ignore:", type);
      }
    };
  }

  onSubmit = async event => {
    event.preventDefault();

    try {
      const response = await superagent.post(`${this.url}/gameroom`).send({
        name: this.state.text
      });

      console.log("response test:", response);
    } catch (error) {
      console.warn("error test:", error);
    }
  };

  onChange = event => {
    const { value } = event.target;
    console.log("onChange", value);
    this.setState({ text: value });
  };

  onClick = async gameroomId => {
    console.log("gameroomId test:", gameroomId);
    try {
      const response = await superagent.put(`${this.url}/join`).send({
        gameroomId,
        userId: 1
      });
      console.log("response test:", response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (this.props.jwt === null) {
      return <Link to="/login">Please sign up to access the lobby </Link>;
    }

    const { gamerooms } = this.state;

    const list = gamerooms.map(gameroom => (
      <div key={gameroom.id}>
        {gameroom.name}
        <button onClick={() => this.onClick(gameroom.id)}>Join</button>
      </div>
    ));

    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} value={this.state.text} />
        <button>Submit</button>

        {list}
      </form>
    );
  }
}

const mapStateToProps = reduxState => {
  console.log("is jwt here?", reduxState.auth.jwt);
  return {
    jwt: reduxState.auth.jwt
  };
};

export default connect(mapStateToProps)(GameRoom);
