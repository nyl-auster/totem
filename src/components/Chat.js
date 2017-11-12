import React, { Component } from "react";
import MessageList from "../components/MessageList";
import MessageForm from "../components/MessageForm";
import io from "socket.io-client";

class Chat extends Component {
  socket = {};
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

    // connect to our chat server
    this.socket = io("http://localhost:8000", {
      query: `username=${props.userName}`
    }).connect();

    // Listen for messages from the server
    this.socket.on("server:message", message => {
      console.log("server:message", message);
      this.addMessage(message);
    });
  }
  addMessage(message) {
    this.setState((prevState, props) => {
      return {
        messages: [...prevState.messages, message]
      };
    });
  }
  sendMessage(message) {
    this.socket.emit("client:message", message);
    console.log("client:message", message);
    this.addMessage(message);
  }
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSended={message => this.sendMessage(message)} />
      </div>
    );
  }
}

export default Chat;
