import React, { Component } from "react";

import {
  LandingWrapper,
  LeftLine,
  RightLine,
  TopLineNarrow,
  SectionWrapper,
  Footer
} from "./Main.style.js";

export default class About extends Component {
  render() {
    return (
      <LandingWrapper id="about">
        <LeftLine top="0" height="8rem" />
        <TopLineNarrow left="-1rem" width="calc(100% + 2rem)" top="6rem" />
        <SectionWrapper>
          <h2>ABOUT US</h2>
        </SectionWrapper>
        <Footer to="contact" smooth={true} duration={500}>
          <img src={require("../../assets/Right-Arrows.svg")} alt="arrow" />
        </Footer>
      </LandingWrapper>
    );
  }
}
