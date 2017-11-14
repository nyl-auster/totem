import React, { Component } from "react";
import PropTypes from "prop-types";

class JoinForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  renderEmailField() {
    return (
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input className="input is-large" type="email" placeholder="Email" />
          <span className="icon is-left">
            <i className="fa fa-envelope" />
          </span>
        </div>
      </div>
    );
  }

  renderSubjectField() {
    return (
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-large"
            type="text"
            placeholder="Sujet de la discussion"
          />
          <span className="icon is-left">
            <i className="fa fa-pencil" />
          </span>
        </div>
      </div>
    );
  }

  handleChangeUserNameField(event) {
    this.setState({
      userName: event.target.value
    });
  }

  onClickHandle() {
    this.props.history.replace({
      pathname: `/discussion/${this.props.discussionId}`,
      state: {
        userName: this.state.userName
      }
    });
  }

  renderUserNameField() {
    return (
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          {this.state.pseudo}
          <input
            value={this.state.userName}
            onChange={e => this.handleChangeUserNameField(e)}
            className="input is-large"
            type="text"
            placeholder="Nom"
          />
          <span className="icon is-left">
            <i className="fa fa-user" />
          </span>
        </div>
      </div>
    );
  }

  render() {
    const { discussionId, invite } = this.props;
    return (
      <div className="has-text-centered">
        <div style={{ width: "400px" }} className="container">
          {!invite ? this.renderEmailField() : ""}
          {this.renderUserNameField()}
          {!invite ? this.renderSubjectField() : ""}
          <br />
          <div
            onClick={() => this.onClickHandle()}
            style={{ fontSize: "1.6rem" }}
            className="button is-primary"
          >
            {invite ? "REJOINDRE LE TOTEM" : "LANCER UN TOTEM"}
          </div>
        </div>
      </div>
    );
  }
}

JoinForm.PropTypes = {
  discussionId: PropTypes.string.isRequired
};

export default JoinForm;
