import React, { Component } from "react";
import "./App.css";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import { Router, Route, Switch } from "react-router";
import messages from "./data/messages";

const RendezVous = () => {
  return (
    <div className="section content">
      <p>
        Yann a besoin de savoir quand vous êtes disponible pour une réunion :
      </p>
      <blockquote className="blockquote">
        Revoir la grille des tarifs pour notre offre commerciale auprès des
        entreprises.
      </blockquote>
      <a
        className="button is-primary"
        href="https://doodle.com/poll/2iwasbdzu5b7qerk#table"
      >
        Voter sur le Doodle
      </a>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <h1 className="title is-1 has-text-centered">TOTEM</h1>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <MessageList messages={messages} />
              <MessageForm />
            </div>
            <div className="column">
              <RendezVous />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
