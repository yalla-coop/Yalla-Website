import React, { Component } from 'react';

import { LandingWrapper, Title } from './Main.style.js';

export default class Landing extends Component {
  render() {
    return (
      <LandingWrapper>
        <Title>
          <img src={require('../../assets/Logo.svg')} alt="logo" />
        </Title>
      </LandingWrapper>
    );
  }
}
