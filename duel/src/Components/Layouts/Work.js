import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
import { Link } from 'react-router-dom';

import ProjectJSON from '../../projects.json';

import img from '../../assets/workScreens/EastEnd-Carousel.png';

import {
  LandingWrapper,
  MobileContainer,
  RightLine,
  TopLineNarrow,
  SectionWrapper,
  MobileSectionWrapper,
  Footer,
  CarousselWrapper,
  ImageDiv,
  ImageWrapper,
  MobileImageDiv
} from './Main.style.js';

const flickityOptions = {
  prevNextButtons: true,
  pageDots: false,
  wrapAround: true
};

export default class Work extends Component {
  state = {
    width: window.innerWidth
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <MobileContainer id="work">
          <TopLineNarrow left="-1rem" width="calc(100% + 2rem)" top="6rem" />
          <SectionWrapper>
            <h2>OUR WORK</h2>
          </SectionWrapper>
          {ProjectJSON.map((project, index) => {
            const { Title, TitleImg, Tag, Description1, GalleryImg } = project;
            return (
              <MobileSectionWrapper>
                <h3>{Title}</h3>
                <Link to={`/projects/${Tag}`}>
                  <MobileImageDiv
                    title={Title}
                    img={require(`../../assets/workScreens/${GalleryImg}.png`)}
                  />
                  <p>{Description1}</p>
                </Link>
              </MobileSectionWrapper>
            );
          })}
        </MobileContainer>
      );
    }
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
          <img src={require('../../assets/Right-Arrows.svg')} alt="arrow" />
        </Footer>
        <RightLine top="0" height="8rem" right="8rem" />
      </LandingWrapper>
    );
  }
}
