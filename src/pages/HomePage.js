import React, { Component } from "react";
import JoinForm from "../components/JoinForm";
import { generateRandomId } from "../lib/totem";

const style = {
  background: "url('/totem-2.png') no-repeat center  bottom",
  height: "100%",
  color: "white !important"
};

class HomePage extends Component {
  render() {
    return (
      <div style={style}>
        <h1
          style={{ fontSize: "7rem" }}
          className="title is-1 has-text-centered"
        >
          TOTEM
        </h1>
        <JoinForm discussionId={generateRandomId()} />
      </div>
    );
  }
}

export default HomePage;
