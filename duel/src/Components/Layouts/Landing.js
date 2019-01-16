import React, { Component } from 'react';

import { LandingWrapper, Title, LeftLine, RightLine, BottomLine } from './Main.style.js';

export default class Landing extends Component {
  render() {
    return (
      <LandingWrapper>
        <LeftLine />
        <Title>
          <img src={require('../../assets/new-logo.svg')} alt="logo" />
        </Title>
        <RightLine />
        <BottomLine />
      </LandingWrapper>
    );
  }
}
