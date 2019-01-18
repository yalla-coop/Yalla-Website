import React, { Component } from 'react';
import Flickity from 'react-flickity-component';

import {
  LandingWrapper,
  LeftLine,
  RightLine,
  TopLineNarrow,
  SectionWrapper,
  Footer,
  CarousselWrapper,
  ImageDiv
} from './Main.style.js';

const flickityOptions = {
  prevNextButtons: true,
  pageDots: false,
  wrapAround: true
};

export default class Work extends Component {
  render() {
    return (
      <LandingWrapper id="work">
        <TopLineNarrow left="-1rem" width="calc(100% + 2rem)" top="6rem" />
        <SectionWrapper>
          <h2>OUR WORK</h2>
          <CarousselWrapper>
            <Flickity
              // disableImagesLoaded={true}
              options={flickityOptions}
              className="mt5"
            >
              <ImageDiv />
              <ImageDiv />
            </Flickity>
          </CarousselWrapper>
        </SectionWrapper>
        <Footer to="about" smooth={true} duration={500}>
          <img src={require('../../assets/Right-Arrows.svg')} alt="arrow" />
        </Footer>
        <RightLine top="0" height="8rem" right="8rem" />
      </LandingWrapper>
    );
  }
}
