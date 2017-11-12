import React, { Component } from "react";
import MessageList from "../components/MessageList";
import MessageForm from "../components/MessageForm";
import messages from "../data/messages";
import io from "socket.io-client";

class Chat extends Component {
  socket = {};
  constructor(props) {
    super(props);

    // connect to our chat server
    this.socket = io("http://localhost:8000", {
      query: `username=${props.userName}`
    }).connect();

    // Listen for messages from the server
    this.socket.on("server:message", message => {
      console.log(message);
    });
  }
  sendMessage(message) {
    this.socket.emit("client:message", message);
  }
  render() {
    return (
      <div>
        <MessageList messages={messages} />
        <MessageForm onMessageSended={message => this.sendMessage(message)} />
      </div>
    );
  }
}

export default Chat;
