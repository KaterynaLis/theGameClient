import React, { Component } from "react";
import { connect } from "react-redux";

class Room extends Component {
  render() {
    const user = this.props.user;

    return (
      <div>
        <p>{`Welcome into the game ${user}\!`}</p>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  console.log("is user here?", reduxState.auth.user_name);
  return {
    user: reduxState.auth.user_name
  };
};

export default connect(mapStateToProps)(Room);
