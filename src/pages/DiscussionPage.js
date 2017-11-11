import React, { Component } from "react";
import MessageList from "../components/MessageList";
import MessageForm from "../components/MessageForm";
import RendezVous from "../components/RendezVous";
import ShareDiscussionLink from "../components/ShareDiscussionLink";
import Layout from "../components/Layout";
import messages from "../data/messages";

class DiscussionPage extends Component {
  render() {
    const discussionId = this.props.match.params.discussionId;
    return (
      <Layout>
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <ShareDiscussionLink discussionId={discussionId} />
          <MessageList messages={messages} />
          <MessageForm />
        </div>
      </Layout>
    );
  }
}

export default DiscussionPage;
