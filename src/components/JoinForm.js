import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class JoinForm extends Component {
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

  renderPseudoField() {
    return (
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input className="input is-large" type="text" placeholder="pseudo" />
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
          {this.renderPseudoField()}
          <br />
          <Link to={`/discussion/${discussionId}`}>
            <div style={{ fontSize: "1.6rem" }} className="button is-primary">
              {invite ? "REJOINDRE LE TOTEM" : "LANCER UN TOTEM"}
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

JoinForm.PropTypes = {
  discussionId: PropTypes.string.isRequired
};

export default JoinForm;
