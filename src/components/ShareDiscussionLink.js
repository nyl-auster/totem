import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShareDiscussionLink = ({ discussionId }) => {
  const path = `/invite/${discussionId}`;
  return (
    <div>
      <em>
        <a href={path}>https://totem.now.sh{path}</a>
      </em>
    </div>
  );
};

ShareDiscussionLink.PropTypes = {
  discussionId: PropTypes.string.isRequired
};

export default ShareDiscussionLink;
