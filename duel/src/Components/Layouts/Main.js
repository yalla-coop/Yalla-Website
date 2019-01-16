import React, { Component } from 'react';
import Landing from './Landing';
import { Contact } from './Main.style';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Contact to="/">contact</Contact>
        <Landing />
      </div>
    );
  }
}
