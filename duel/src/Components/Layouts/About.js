import React, { Component } from 'react';

import { LandingWrapper, LeftLine, RightLine, TopLineNarrow, SectionWrapper } from './Main.style.js';

export default class About extends Component {
  render() {
    return (
      <LandingWrapper>
        <LeftLine top="0" height="8rem"/>
        <TopLineNarrow left="-1rem" width="calc(100% + 2rem)" top="6rem" />
        <SectionWrapper>
          <h2>ABOUT US</h2>
        </SectionWrapper>
      </LandingWrapper>
    );
  }
}
