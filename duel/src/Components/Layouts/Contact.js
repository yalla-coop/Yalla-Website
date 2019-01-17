import React, { Component } from 'react';

import { LandingWrapper, LeftLine, RightLine, TopLineNarrow, SectionWrapper } from './Main.style.js';

export default class Contact extends Component {
  render() {
    return (
      <LandingWrapper>
        <LeftLine top="0" height="8rem" borderColor="var(--gray)"/>
        <RightLine top="0" height="80%" right="8rem" borderColor="var(--gray)"/>
        <TopLineNarrow left="-1rem" width="calc(100% + 2rem)" top="6rem" />
        <SectionWrapper>
          <h2>CONTACT US</h2>
        </SectionWrapper>
      </LandingWrapper>
    );
  }
}
