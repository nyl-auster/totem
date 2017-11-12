import React, { Component } from "react";
import ShareDiscussionLink from "../components/ShareDiscussionLink";
import Layout from "../components/Layout";
import Chat from "../components/Chat";

class DiscussionPage extends Component {
  render() {
    const discussionId = this.props.match.params.discussionId;
    return (
      <Layout>
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <ShareDiscussionLink discussionId={discussionId} />
          <Chat discussionId={discussionId} userName="Yann" />
        </div>
      </Layout>
    );
  }
}

export default DiscussionPage;
