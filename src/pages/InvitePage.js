import React, { Component } from "react";
import JoinForm from "../components/JoinForm";

const style = {
  background: "url('/totem-2.png') no-repeat center  bottom",
  height: "100%",
  color: "white !important"
};

class InvitePage extends Component {
  render() {
    return (
      <div style={style}>
        <h1 className="section title is-1 has-text-centered">
          Rejoindre un Totem en cours
        </h1>
        <JoinForm {...this.props} invite="true" />
      </div>
    );
  }
}

export default InvitePage;
