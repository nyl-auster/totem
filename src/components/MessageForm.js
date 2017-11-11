import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 280
    };
  }
  handleChange = e => {
    this.setState(function(prevState, props) {
      return {
        count: prevState.count - 1
      };
    });
  };
  render() {
    return (
      <div className="section">
        <div>Characters left : {this.state.count}</div>
        <textarea onChange={e => this.handleChange(e)} className="textarea" />
        <br />
        <div className="control">
          <button className="button is-primary">Envoyer</button>
        </div>
      </div>
    );
  }
}

export default MessageForm;
