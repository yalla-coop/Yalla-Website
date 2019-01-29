import React, { Component } from 'react';

// import { Link } from 'react-router-dom';

import ProjectJSON from '../../projects.json';

import {
  ProjectContainer,
  LeftLine,
  RightLine,
  TopLineNarrow,
  SectionWrapper,
  Footer,
  ProjectImageDiv,
  ProjectLinkWrapper,
  ProjectTextBox,
  ProjectIntroDiv,
  ExtLink
} from './Main.style.js';

const checkTag = (url, tag) => url === tag;
// function to create a list of names from an array...
const createString = array =>
  array.map((e, i, array) => {
    if (array.length - 1 === i) {
      return 'and ' + e;
    } else {
      return e + ', ';
    }
  });

export default class Project extends Component {
  render() {
    const ProjectName = this.props.location.pathname.split('/')[2];
    console.log(ProjectName);
    return (
      <div>
        {ProjectJSON.map(
          (
            {
              Title,
              Developers,
              Category,
              Teaser,
              Client,
              AboutClient,
              Description1,
              Description2,
              Duration,
              GitHub,
              Website,
              Tag,
              TitleImg,
              Testimonial
            },
            index
          ) => {
            if (checkTag(ProjectName, Tag)) {
              return (
                <div key={index}>
                  <ProjectContainer>
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
                    <ExtLink className="mr4 mt3 flex self-center" to="/">
                      Back
                    </ExtLink>
                  </ProjectContainer>
                </div>
              );
            }
          }
        )}
      </div>
    );
  }
}
