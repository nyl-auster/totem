import React from "react";

const Message = ({ message }) => (
  <div className="columns">
    <div className="column is-2">{message.user.name}</div>
    <div className="column is-10">{message.content}</div>
  </div>
);

export default Message;
