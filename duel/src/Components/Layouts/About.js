import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

import profiles from '../../profiles.json';

import {
  LeftLine,
  TopLineNarrow,
  SectionWrapper,
  Footer,
  TeamWrapper,
  Member,
  MemberLink,
  ProfileImgDiv,
  ProfileHeader,
  AboutWrapper
} from './Main.style.js';

export default class About extends Component {
  render() {
    return (
      <AboutWrapper id="about">
        <LeftLine top="0" height="8rem" />
        <TopLineNarrow left="-1rem" width="calc(100% + 2rem)" top="6rem" />
        <SectionWrapper>
          <h2>ABOUT US</h2>
          <TeamWrapper>
            {profiles.map((profile, index) => (
              <Member key={index}>
                <Slide bottom>
                  <ProfileHeader>
                    <ProfileImgDiv
                      src={require(`../../assets/profiles/${
                        profile.imgName
                      }.jpeg`)}
                      alt="simon"
                    />

                    <a
                      href={profile.github}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <img
                        src={require('../../assets/profiles/image 2.svg')}
                        alt="github"
                      />
                    </a>
                  </ProfileHeader>
                </Slide>
                <h3>{profile.name}</h3>
                <MemberLink to={`/team/${profile.id}`}>Read bio</MemberLink>
              </Member>
            ))}
          </TeamWrapper>
        </SectionWrapper>
        <Footer to="contact" smooth={true} duration={500}>
          <img src={require('../../assets/Right-Arrows.svg')} alt="arrow" />
        </Footer>
      </AboutWrapper>
    );
  }
}
