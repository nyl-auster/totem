import React from "react";

const Message = ({ message }) => (
  <div className="columns">
    <div className="column is-2">
      <strong>{message.userName} : </strong> <br />
    </div>
    <div className="column is-9">{message.message}</div>
  </div>
);

export default Message;
