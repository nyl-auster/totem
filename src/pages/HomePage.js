import React, { Component } from "react";
import Layout from "../components/Layout";
import { Router, Route, Switch, Link } from "react-router-dom";
import messages from "../data/messages";

class HomePage extends Component {
  render() {
    return (
      <div className="section has-text-centered">
        <h1 className="title is-1">TOTEM</h1>
        <div style={{ width: "500px" }} className="container">
          <div class="field">
            <label class="label">
              Entrez votre email pour créer la discussion
            </label>
            <div class="control">
              <input class="input" type="email" placeholder="Text input" />
            </div>
          </div>
          <p>
            <Link to="/discussion">
              <div className="button is-primary">Commencer la discussion</div>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default HomePage;
