import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.countMax = 200;
    this.state = {
      count: this.countMax,
      message: ""
    };
  }
  handleChange(event) {
    this.setState({
      count: this.state.count - 1,
      message: event.target.value
    });
  }
  handleClick = event => {
    this.setState(function(prevState, props) {
      return {
        count: this.countMax
      };
    });
  };
  render() {
    let buttonAttributes = {};
    if (this.state.count < 0) {
      buttonAttributes.disabled = true;
    }
    return (
      <div className="section">
        <div>Nombre de caractères restant: {this.state.count}</div>
        <textarea
          value={this.state.message}
          onChange={this.handleChange.bind(this)}
          className="textarea"
        />
        <br />
        <div className="control">
          <button
            {...buttonAttributes}
            onClick={() => this.handleClick()}
            className="button is-primary"
          >
            Envoyer
          </button>
        </div>
      </div>
    );
  }
}

export default MessageForm;
