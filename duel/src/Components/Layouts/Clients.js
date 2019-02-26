import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import ProjectJSON from '../../projects.json';

import {
  LeftLine,
  TopLineNarrow,
  SectionWrapper,
  Footer,
  ClientsWrapper,
  RightLine,
  LogoWrapper,
  LogoDiv
} from './Main.style.js';

export default class Clients extends Component {
  render() {
    return (
      <ClientsWrapper id="clients">
        <TopLineNarrow left="-1rem" width="calc(100% + 2rem)" top="6rem" />
        <SectionWrapper>
          <Fade top>
            <h2>Recent Cooperations</h2>
          </Fade>
          <LogoWrapper>
            {ProjectJSON.map((project, index) => {
              const { Logo, Testimonial } = project;
              return (
                <LogoDiv
                  src={require(`../../assets/workScreens/${Logo}.png`)}
                />
              );
            })}
          </LogoWrapper>
          {/* <div>
            <p>{Testimonial}</p>
          </div> */}
        </SectionWrapper>
        <Footer to="about" smooth={true} duration={500}>
          <img src={require('../../assets/Right-Arrows.svg')} alt="arrow" />
        </Footer>
        <LeftLine top="0" height="8rem" right="8rem" />
      </ClientsWrapper>
    );
  }
}
