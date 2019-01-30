import React, { Component } from 'react';

import ProjectJSON from '../../projects.json';
import ProjectGallery from './ProjectGallery';
import {
  ProjectContainer,
  LeftLine,
  RightLine,
  TopLineNarrow,
  SectionWrapper,
  ProjectFooter,
  ProjectImageDiv,
  ProjectLinkWrapper,
  ProjectTextBox,
  ExtLink
} from './Main.style.js';

const checkTag = (url, tag) => url === tag;
// function to create a list of names from an array...
// const createString = array =>
//   array.map((e, i, array) => {
//     if (array.length - 1 === i) {
//       return 'and ' + e;
//     } else {
//       return e + ', ';
//     }
//   });

export default class Project extends Component {
  render() {
    const ProjectName = this.props.location.pathname.split('/')[2];

    return (
      <div>
        {ProjectJSON.map(
          (
            {
              Title,
              Teaser,
              Description1,
              Description2,
              GitHub,
              Website,
              Tag,
              TitleImg
            },
            index
          ) => {
            if (checkTag(ProjectName, Tag)) {
              return (
                <div key={index}>
                  <ProjectContainer key={index}>
                    <LeftLine top="0" height="8rem" borderColor="var(--gray)" />
                    <RightLine
                      top="0"
                      height="80%"
                      right="8rem"
                      borderColor="var(--gray)"
                    />
                    <TopLineNarrow
                      left="-1rem"
                      width="calc(100% + 2rem)"
                      top="6rem"
                    />
                    <SectionWrapper>
                      <div className="flex items-center">
                        <h2>{Title}</h2>
                      </div>
                    </SectionWrapper>
                    <h3>{Teaser}</h3>
                    <ProjectTextBox>
                      <p>{Description1}</p>
                      <p>{Description2}</p>
                    </ProjectTextBox>
                    <ProjectImageDiv
                      title={Title}
                      img={require(`../../assets/workScreens/${TitleImg}`)}
                    />
                    <ProjectLinkWrapper>
                      <ExtLink to={Website}>Visit Website</ExtLink>
                      <ExtLink to={GitHub}>View on GitHub</ExtLink>
                    </ProjectLinkWrapper>
                    <ProjectFooter
                      to="projectGallery"
                      smooth={true}
                      duration={500}
                    >
                      <img
                        src={require('../../assets/Right-Arrows.svg')}
                        alt="arrow"
                      />
                    </ProjectFooter>
                  </ProjectContainer>
                  <div id="projectGallery">
                    <ProjectGallery />
                    <ProjectLinkWrapper>
                      <ExtLink className="self-center" to="/">
                        <img
                          src={require('../../assets/Left-Arrows.svg')}
                          alt="arrow"
                        />
                      </ExtLink>
                    </ProjectLinkWrapper>
                  </div>
                </div>
              );
            }
          }
        )}
      </div>
    );
  }
}
