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
    return (
      <Layout>
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <ShareDiscussionLink {...this.props} discussionId={discussionId} />
          <div className="section">
            <TotemRules />
          </div>
          <Chat discussionId={discussionId} userName={userName} />
        </div>
      </Layout>
    );
  }
}

export default DiscussionPage;
