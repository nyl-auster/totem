import React from "react";

const Message = ({ message }) => (
  <div className="columns">
    <div className="column is-2">
      <strong>{message.user.name} : </strong> <br />
    </div>
    <div className="column is-9">{message.content}</div>
  </div>
);

export default Message;
