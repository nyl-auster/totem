import React from "react";

const Message = ({ message }) => (
  <div className="columns">
    <div className="column is-2">
      <strong>username : </strong> <br />
    </div>
    <div className="column is-9">{message}</div>
  </div>
);

export default Message;
