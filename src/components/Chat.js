import React, { Component } from "react";
import MessageList from "../components/MessageList";
import MessageForm from "../components/MessageForm";
import io from "socket.io-client";

class Chat extends Component {
  socket = {};

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      messages: []
    };

    // connect to our chat server
    this.socket = io(process.env.REACT_APP_API_URL, {
      query: `username=${props.userName}`
    }).connect();

    this.socket.on("connect", () => {
      this.socket.emit("client:join", { room: props.discussionId });
    });

    // Listen for messages from the server
    this.socket.on("server:message", message => {
      console.log("get message from the server", message);
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
    const data = {
      userName: this.props.userName,
      message: message,
      room: this.room
    };
    this.socket.emit("client:message", data);
    console.log("client emits message", data);
    this.addMessage(data);
  }
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <MessageForm
          userName={this.props.userName}
          onMessageSended={message => this.sendMessage(message)}
        />
      </div>
    );
  }
}

export default Chat;
