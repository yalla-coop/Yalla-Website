import React, { Component } from 'react';

import { LandingWrapper, LeftLine, RightLine, TopLineNarrow, SectionWrapper, Footer } from './Main.style.js';

export default class Work extends Component {
  render() {
    return (
      <LandingWrapper id="work">
        <TopLineNarrow left="-1rem" width="calc(100% + 2rem)" top="6rem" />
        <SectionWrapper>
          <h2>OUR WORK</h2>
        </SectionWrapper>
        <Footer to="about" smooth={true} duration={500} >
          <img src={require('../../assets/Right-Arrows.svg')} alt="arrow" />
        </Footer>
        <RightLine top="0" height="8rem" right="8rem"/>
      </LandingWrapper>
    );
  }
}
