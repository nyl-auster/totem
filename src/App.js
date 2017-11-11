import React, { Component } from "react";
import "./App.css";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import RendezVous from "./components/RendezVous";
import Header from "./components/Header";
import { Router, Route, Switch } from "react-router";
import messages from "./data/messages";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
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
