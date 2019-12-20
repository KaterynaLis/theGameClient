import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import api from "../../api";

class GameRoom extends Component {
  url = "http://localhost:4000";

  state = {
    text: ""
  };

  onSubmit = async event => {
    event.preventDefault();

    try {
      const response = await api("/gameroom", {
        method: "POST",
        body: { name: this.state.text },
        jwt: this.props.jwt
      });

      console.log("response test:", response);
    } catch (error) {
      console.warn("error test:", error);
    }
    this.setState({
      text: ""
    });
  };

  onChange = event => {
    const { value } = event.target;
    console.log("onChange", value);
    this.setState({ text: value });
  };

  onClick = async gameroomId => {
    console.log("gameroomId:", gameroomId);
    try {
      const response = await api("/join", {
        method: "PUT",
        body: {
          gameroomId
        },
        jwt: this.props.jwt
      });

      console.log("response test:", response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (this.props.jwt === null) {
      return <Link to="/">Please login to access the lobby </Link>;
    }

    const { rooms } = this.props;

    const list = rooms.map(gameroom => (
      <div key={gameroom.id}>
        <Link to="/room" onClick={() => this.onClick(gameroom.id)}>
          {gameroom.name}{" "}
        </Link>
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
  console.log("is jwt here?", reduxState.auth);
  return {
    jwt: reduxState.auth.accessToken,
    rooms: reduxState.rooms
  };
};

export default connect(mapStateToProps)(GameRoom);
