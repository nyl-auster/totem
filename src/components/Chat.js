import React, { Component } from "react";
import MessageList from "../components/MessageList";
import MessageForm from "../components/MessageForm";
import messages from "../data/messages";
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
      console.log(message);
    });
  }
  sendMessage(message) {
    this.socket.emit("client:message", message);
    this.setState((prevState, props) => {
      return {
        messages: [...prevState.messages, message]
      };
    });
  }
  render() {
    console.log(this.state.messages);
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSended={message => this.sendMessage(message)} />
      </div>
    );
  }
}

export default Chat;
