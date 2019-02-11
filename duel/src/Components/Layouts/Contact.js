import React, { Component } from 'react';

import {
  LandingWrapper,
  LeftLine,
  RightLine,
  TopLineNarrow,
  SectionWrapper,
  ContactWrapper
} from './Main.style.js';

export default class Contact extends Component {
  render() {
    return (
      <LandingWrapper id="contact">
        <LeftLine top="0" height="8rem" borderColor="var(--gray)" />
        <RightLine
          top="0"
          height="80%"
          right="8rem"
          borderColor="var(--gray)"
        />
        <TopLineNarrow left="-1rem" width="calc(100% + 2rem)" top="6rem" />
        <SectionWrapper>
          <h2>CONTACT US</h2>
          <ContactWrapper>
            <p>Want to chat a bit more?</p>
            <p>Please get in touch below:</p>
            <a href="mailto:sup@yalla.coop">
              <h3>email: hello@yallacooperative.com</h3>
            </a>
          </ContactWrapper>
        </SectionWrapper>
      </LandingWrapper>
    );
  }
}
