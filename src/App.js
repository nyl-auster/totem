import React, { Component } from "react";
import Layout from "./components/Layout";
import DiscussionPage from "./pages/DiscussionPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/discussion" component={DiscussionPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
