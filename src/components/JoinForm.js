import React, { Component } from "react";
import PropTypes from "prop-types";
import { generateRandomId } from "../lib/totem";

class JoinForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.discussionId = null;
    this.state = {
      email: "",
      userName: "",
      subject: ""
    };
  }

  emailIsValid() {
    return this.state.email.indexOf("@") !== -1;
  }

  userNameIsValid() {
    return this.state.userName.trim().length > 0;
  }

  subjectIsValid() {
    return this.state.subject.trim().length > 0;
  }

  formIsvalid() {
    if (this.props.invite) {
      return this.userNameIsValid();
    }
    const isValid =
      this.emailIsValid() && this.subjectIsValid() && this.userNameIsValid();
    return isValid;
  }

  renderEmailField() {
    return (
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            onChange={e => this.handleChangeEmailField(e)}
            className="input is-large"
            type="email"
            placeholder="Email"
          />
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
            onChange={e => this.handleChangeSubjectField(e)}
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

  handleChangeUserNameField(event) {
    this.setState({
      userName: event.target.value
    });
  }

  handleChangeEmailField(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleChangeSubjectField(event) {
    this.setState({
      subject: event.target.value
    });
  }

  submitForm() {
    const discussionId = this.props.match.params.discussionId
      ? this.props.match.params.discussionId
      : generateRandomId(this.state.email);
    this.props.history.push({
      pathname: `/discussion/${discussionId}`,
      state: { ...this.state }
    });
  }

  render() {
    const { invite } = this.props;
    let buttonAttributes = {};
    if (!this.formIsvalid()) {
      buttonAttributes = { disabled: true };
    }
    return (
      <div className="has-text-centered">
        <div style={{ width: "400px" }} className="container">
          {!invite && this.renderSubjectField()}
          {!invite && this.renderEmailField()}
          {this.renderUserNameField()}
          <br />
          <button
            onClick={() => this.submitForm()}
            style={{ fontSize: "1.6rem" }}
            className="button is-primary"
            {...buttonAttributes}
          >
            {invite ? "REJOINDRE LE TOTEM" : "LANCER UN TOTEM"}
          </button>
        </div>
      </div>
    );
  }
}

export default JoinForm;
