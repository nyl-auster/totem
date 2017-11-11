import React, { Component } from "react";
import MessageList from "../components/MessageList";
import MessageForm from "../components/MessageForm";
import RendezVous from "../components/RendezVous";
import Layout from "../components/Layout";
import { Router, Route, Switch } from "react-router";
import messages from "../data/messages";

class DiscussionPage extends Component {
  render() {
    return (
      <Layout
        content={
          <div className="discussion">
            <MessageList messages={messages} />
            <MessageForm />
          </div>
        }
        columnRight={
          <div>
            <RendezVous />
          </div>
        }
      />
    );
  }
}

export default DiscussionPage;
