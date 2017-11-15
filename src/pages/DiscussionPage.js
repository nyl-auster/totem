import React, { Component } from "react";
import ShareDiscussionLink from "../components/ShareDiscussionLink";
import Layout from "../components/Layout";
import Chat from "../components/Chat";
import TotemRules from "../components/TotemRules";

class DiscussionPage extends Component {
  render() {
    const discussionId = this.props.match.params.discussionId;
    const userName = this.props.location.state
      ? this.props.location.state.userName
      : "Unknown";
    const subject = this.props.location.state
      ? this.props.location.state.subject
      : "Subject unknown";
    return (
      <Layout>
        <ShareDiscussionLink {...this.props} discussionId={discussionId} />
        <br />
        <h2 className="title is-2">{subject}</h2>
        <Chat discussionId={discussionId} userName={userName} />

        <div className="section">
          <TotemRules />
        </div>
      </Layout>
    );
  }
}

export default DiscussionPage;
