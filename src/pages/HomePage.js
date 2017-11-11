import React, { Component } from "react";
import Layout from "../components/Layout";
import { Router, Route, Switch, Link } from "react-router-dom";
import messages from "../data/messages";

const style = {
  background: "url('/totem-2.png') no-repeat center  bottom",
  height: "100%",
  color: "white !important"
};

class HomePage extends Component {
  render() {
    return (
      <div style={style} className="section has-text-centered">
        <h1 className="title is-1">TOTEM</h1>
        <div style={{ width: "300px" }} className="container">
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-large" type="email" placeholder="Email" />
              <span class="icon is-left">
                <i class="fa fa-envelope" />
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-large" type="text" placeholder="pseudo" />
              <span class="icon is-left">
                <i class="fa fa-user" />
              </span>
            </div>
          </div>
          <p>
            <br />
            <Link to="/discussion">
              <div style={{ fontSize: "1.6rem" }} className="button is-primary">
                LANCER UN TOTEM
              </div>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default HomePage;
