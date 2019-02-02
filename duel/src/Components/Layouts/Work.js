import React, { Component } from "react";
import Flickity from "react-flickity-component";
import { Link } from "react-router-dom";

import ProjectJSON from "../../projects.json";

import img from "../../assets/workScreens/EastEnd-Carousel.png";

import {
  LandingWrapper,
  RightLine,
  TopLineNarrow,
  SectionWrapper,
  Footer,
  CarousselWrapper,
  ImageDiv,
  ImageWrapper
} from "./Main.style.js";

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
            <Flickity options={flickityOptions} className="flickity-custom">
              {ProjectJSON.map((project, index) => {
                const { Title, TitleImg, Tag } = project;
                return (
                  <ImageWrapper key={index}>
                    <Link to={`/projects/${Tag}`}>
                      <ImageDiv
                        title={Title}
                        img={require(`../../assets/workScreens/${TitleImg}.png`)}
                      />
                    </Link>
                  </ImageWrapper>
                );
              })}
            </Flickity>
          </CarousselWrapper>
        </SectionWrapper>
        <Footer to="about" smooth={true} duration={500}>
          <img src={require("../../assets/Right-Arrows.svg")} alt="arrow" />
        </Footer>
        <RightLine top="0" height="8rem" right="8rem" />
      </LandingWrapper>
    );
  }
}
