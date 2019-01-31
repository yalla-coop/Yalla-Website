import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import profiles from '../../profiles.json';

import {
  LandingWrapper,
  LeftLine,
  RightLine,
  TopLineNarrow,
  SectionWrapper,
  Footer,
  TeamWrapper,
  Member,
  MemberLink,
  ProfileImgDiv,
  ProfileHeader,
  BottomLine
} from './Main.style.js';

export default class About extends Component {
  render() {
    profiles.map(profile => console.log(profile));
    return (
      <LandingWrapper id="about">
        <LeftLine top="0" height="8rem" />
        <TopLineNarrow left="-1rem" width="calc(100% + 2rem)" top="6rem" />
        <SectionWrapper>
          <h2>ABOUT US</h2>
          <TeamWrapper>
            {profiles.map(profile => (
              <Member>
                <ProfileHeader>
                  <ProfileImgDiv
                    src={require(`../../assets/profiles/${
                      profile.imgName
                    }.jpeg`)}
                    alt="simon"
                  />
                  <a href={profile.github} target="_blank">
                    <img
                      src={require('../../assets/profiles/image 2.svg')}
                      alt="github"
                    />
                  </a>
                </ProfileHeader>
                <h3>{profile.name}</h3>
                <p>{profile.teaser}</p>
                <MemberLink to={`/team/${profile.id}`}>Read bio</MemberLink>
              </Member>
            ))}
          </TeamWrapper>
        </SectionWrapper>
        <Footer to="contact" smooth={true} duration={500}>
          <img src={require('../../assets/Right-Arrows.svg')} alt="arrow" />
        </Footer>
      </LandingWrapper>
    );
  }
}
