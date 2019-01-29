import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Main from './Layouts/Main';
import Project from './Layouts/Project';
import history from '../history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/projects/:tag" exact component={Project} />
        </Switch>
      </Router>
    );
  }
}

export default App;
