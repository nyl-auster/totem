import React from "react";
import PropTypes from "prop-types";

const ShareDiscussionLink = ({ discussionId }) => {
  const path = `/invite/${discussionId}`;
  return (
    <div className="has-text-centered">
      <em>
        Inviter quelqu'un à se joindre à cette discussion <br />
        {process.env.REACT_APP_DOMAIN_NAME}
        {path}
      </em>
    </div>
  );
};

ShareDiscussionLink.PropTypes = {
  discussionId: PropTypes.string.isRequired
};

export default ShareDiscussionLink;
