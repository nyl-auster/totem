import React, { Component } from "react";
import DiscussionPage from "./pages/DiscussionPage";
import InvitePage from "./pages/InvitePage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/discussion/:discussionId" component={DiscussionPage} />
          <Route path="/invite/:discussionId" component={InvitePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
