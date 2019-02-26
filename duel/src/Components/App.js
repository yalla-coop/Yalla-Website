import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Project from './Layouts/Project';
import Main from './Layouts/Main';
import Team from './Layouts/Team';
import history from '../history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/projects/:tag" exact component={Project} />
          <Route path="/team/:id" exact component={Team} />
        </Switch>
      </Router>
    );
  }
}

export default App;
