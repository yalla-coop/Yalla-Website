import React, { Component } from "react";
import { Link } from "react-router-dom";

import profiles from "../../profiles.json";
import Flickity from "react-flickity-component";

import {
  ProfileImgDiv,
  LeftLine,
  LandingWrapper,
  TopLineNarrow,
  SectionWrapper,
  ProfileWrapper,
  ProfileDescr,
  ImageWrapper,
  ImageDiv,
  BackLink,
  HeadlineDiv,
  AboutWrapper
} from "./Main.style.js";

const flickityOptions = {
  prevNextButtons: true,
  pageDots: false,
  wrapAround: true
};

export default class Team extends Component {
  state = {
    id: null,
    profile: null,
    loaded: false
  };
  componentDidMount() {
    const pathname = window.location.href;
    const id = pathname.split("/")[4];
    console.log(pathname);
    console.log(id);
    const profile = profiles.filter(profile => profile && profile.id === id);

    this.setState({ id: id, profile: profile[0], loaded: true });
  }

  render() {
    const { profile, loaded } = this.state;
    if (!loaded) return <h1>Loading...</h1>;
    else {
      console.log(profile);
      const { name, github, linkedin, bio, imgName, work } = profile;
      return (
        <AboutWrapper id="about">
          <LeftLine top="0" height="20rem" />
          <TopLineNarrow left="-1rem" width="calc(100% + 2rem)" top="6rem" />
          <BackLink to="/">{`<< back`}</BackLink>
          <SectionWrapper>
            <h2>{name.toUpperCase()}</h2>
            <ProfileWrapper>
              <div className="image">
                <img
                  src={require(`../../assets/profiles/${imgName}.jpeg`)}
                  alt="profile"
                />
              </div>
              <ProfileDescr>
                <p>{bio}</p>
                <div>
                  <a href={github} target="_blank">
                    <img
                      src={require("../../assets/profiles/image 2.svg")}
                      alt="github"
                    />
                  </a>
                  <a href={linkedin} target="_blank">
                    <img
                      src={require("../../assets/profiles/linkedin-5.svg")}
                      alt="linkedin"
                    />
                  </a>
                </div>
              </ProfileDescr>
            </ProfileWrapper>
            <HeadlineDiv>
              <h2>{name.split(" ")[0]}'s Projects</h2>
            </HeadlineDiv>
            <Flickity
              // disableImagesLoaded={true}
              options={flickityOptions}
              className="flickity-custom"
            >
              {work.map((caseStudy, index) => {
                console.log(caseStudy);
                return (
                  <ImageWrapper key={index}>
                    <Link to={`/projects/${caseStudy.tag}`}>
                      <ImageDiv
                        title={caseStudy.tag}
                        img={require(`../../assets/workScreens/${
                          caseStudy.titleImg
                        }.png`)}
                      />
                    </Link>
                  </ImageWrapper>
                );
              })}
            </Flickity>
          </SectionWrapper>
        </AboutWrapper>
      );
    }
  }
}
