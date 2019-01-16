import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Main from './Layouts/Main';
import history from '../history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default App;
