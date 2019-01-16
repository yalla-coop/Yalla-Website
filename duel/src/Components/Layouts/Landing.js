import React, { Component } from 'react';

import { LandingWrapper, Title, LeftLine, RightLine, BottomLine, Footer } from './Main.style.js';

export default class Landing extends Component {
  render() {
    return (
      <LandingWrapper>
        <LeftLine height="calc(100% - 6rem)" top="6rem" />
        <Title>
          <img src={require('../../assets/logo-thin.svg')} alt="logo" />
        </Title>
        <Footer to="intro" smooth={true} duration={500} >
          <img src={require('../../assets/Right-Arrows.svg')} alt="arrow" />
        </Footer>
        <RightLine right="8rem" height="80%" top="0" />
        <BottomLine left="-4rem" width="calc(100% + 9rem)"/>
      </LandingWrapper>
    );
  }
}
