import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import ProjectJSON from '../../projects.json';

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
    const isMobile = width <= 768;
    if (isMobile) {
      return (
        <Fade clear>
          <MobileContainer id="work">
            <SectionWrapper>
              <h2>OUR WORK</h2>
            </SectionWrapper>

            {ProjectJSON.map((project, index) => {
              const { Title, Tag, Description1, GalleryImg } = project;
              return (
                <div>
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
                </div>
              );
            })}
          </MobileContainer>
        </Fade>
      );
    } else {
      return (
        <LandingWrapper id="work">
          <TopLineNarrow left="-1rem" width="calc(100% + 2rem)" top="6rem" />
          <SectionWrapper>
            <Fade top>
              <h2>OUR WORK</h2>
            </Fade>
            <CarousselWrapper>
              <Fade clear>
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
              </Fade>
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
}
