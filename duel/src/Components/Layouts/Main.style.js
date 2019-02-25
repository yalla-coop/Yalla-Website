import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

// media queries

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '680px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  mobileXL: `(max-width: ${size.mobileXL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

export const Container = styled.div`
  width: 100vw;
  margin: 0;
  overflow: hidden;
`;

// default wrapper 128px pa left and right
const Wrapper = styled.div.attrs({})`
  padding-left: 6rem;
  padding-right: 6rem;
  width: 100vw;
  margin: 0;

  @media (max-width: ${size.tablet}) {
    padding-left: 0rem;
    padding-right: 0rem;
    width: 100vw;
  }
`;

export const LandingWrapper = styled(Wrapper).attrs({
  className: 'vh-100 flex flex-column justify-center'
})`
  padding-left: 8rem;
  padding-right: 8rem;
  position: relative;

  @media (max-width: ${size.tablet}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Title = styled.div.attrs({
  className: 'flex justify-center align-center'
})`
  width: 100%;
`;

export const ContactLink = styled(ScrollLink).attrs({
  className: 'flex fixed h3 items-end mp-secondary-color'
})`
  right: 9rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.25rem;
  z-index: 2;
  transition: all 0.5s ease-in-out;

  :after {
    content: ' ';
    position: absolute;
    bottom: 0.25rem;
    border-bottom: 1px var(--secondary) solid;
    width: calc(100% + 3rem);
    transition: all 0.5s ease-in-out;
  }

  :hover {
    color: var(--primary);

    :after {
      border-color: var(--primary);
      width: calc(100% + 9rem);
    }
  }
  @media (max-width: ${size.tablet}) {
    left: 1rem;
    height: 3rem;
  }
`;

export const ExtLink = styled.a.attrs({
  className: 'no-underline mp-secondary-color'
})`
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  :hover {
    color: var(--primary);
  }
  img {
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const ProjectGalleryLink = styled(Link).attrs({
  className:
    'flex justify-center items-center self-center overflow-hidden white no-underline '
})`
  text-align: center;
`;

export const ProjectGalleryWrapper = styled.div`
  @media (max-width: ${size.laptop}) {
    display: none;
  }
`;

export const ProjectGalleryFrame = styled.div.attrs({
  className: 'grow hide-child cover bg-center flex justify-center'
})`
  height: 200px;
  width: 300px;
  background: url(${props => props.img});
  padding-right: 1rem;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const IntroHeader = styled.div.attrs({
  className: 'flex flex-column'
})`
  height: 100%;
  padding-top: 8rem;
  justify-content: flex-start;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (max-width: ${size.tablet}) {
    padding-top: 4rem;
  }
`;

export const IntroTextWrapper = styled.div.attrs({
  className: 'flex flex-column'
})`
  padding-left: 6rem;
  padding-top: 1rem;
  justify-content: flex-start;
  p {
    font-size: 1rem;
    text-align: right;
    font-weight: 300;
  }
`;

export const SectionWrapper = styled.div.attrs({
  className: 'flex flex-column'
})`
  height: 100%;
  padding-top: 2.45rem;
  width: 100%;
  h2 {
    -webkit-text-stroke: 1px var(--secondary);
    color: var(--white);
    font-size: 2rem;
  }

  @media (max-width: ${size.tablet}) {
    .project-title {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    h2 {
      margin-bottom: auto;
    }
  }
`;

export const ImageWrapper = styled.div.attrs({ className: 'w-100' })`
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const CarousselWrapper = styled.div.attrs({
  className: 'flex flex-column self-center'
})`
  margin-top: 2rem;
  width: 100%;
  .flickity-custom {
    transition: all 0.5s ease;

    :hover {
      transform: scale(1.05);
    }
  }
`;

export const ImageDiv = styled.div.attrs({
  className: 'w-100 flex self-center'
})`
  background: url(${props => props.img}) center;
  title: ${props => props.title};
  background-repeat: no-repeat;
  background-size: contain;
  height: 400px;
`;

export const MobileContainer = styled.div.attrs({
  className: 'flex flex-column justify-center'
})`
  padding-left: 1rem;
  padding-right: 1rem;
  height: auto;

  @media ${device.mobileL} {
    margin-top: 10px;
  }
  @media ${device.mobileM} {
    margin-top: 30px;
  }
  @media ${device.mobileS} {
    margin-top: 100px;
  }
`;

export const MobileSectionWrapper = styled.div.attrs({
  className: 'flex flex-column'
})`
  height: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  h3 {
    text-align: center
    -webkit-text-stroke: 1px var(--secondary);
    color: var(--secondary);
    // font-size: 1.3 rem;
  }
  a {
    font-size: 0.9rem;
    text-align: left;
    font-weight: 300;
    text-decoration: none;
    color: var(--primary);
  }

`;

export const MobileImageDiv = styled.div.attrs({
  className: 'flex self-center'
})`
  background: url(${props => props.img}) center;
  title: ${props => props.title};
  background-repeat: no-repeat;
  background-size: cover;
  height: 450px;
  width: 100%;

  :hover {
    transform: scale(1.05);
  }
  @media ${device.mobileXL} {
    height: 400px;
  }
  @media ${device.mobileL} {
    height: 300px;
  }
  @media ${device.mobileM} {
    height: 250px;
  }
  @media ${device.mobileS} {
    height: 150px;
  }
`;

export const ProjectContainer = styled(Wrapper).attrs({
  className: 'flex flex-column justify-center'
})`
  padding-left: 8rem;
  padding-right: 8rem;
  position: relative;

  @media (max-width: ${size.tablet}) {
    padding-left: 0;
    h3 {
      padding-left: 1rem;
    }
  }
`;

export const ProjectImageDiv = styled.div.attrs({
  className: 'contain'
})`
  background: url(${props => props.img}) center;
  title: ${props => props.title};
  background-repeat: no-repeat;
  height: 300px;
  margin-top: 0.5rem;
`;

export const ProjectTextBox = styled.div.attrs({
  className: 'flex flex-column'
})`
  padding-left: 6rem;
  padding-right: 1rem;
  justify-content: flex-start;
  p {
    font-size: 1rem;
    text-align: right;
    font-weight: 300;
  }
`;

export const ProjectLinkWrapper = styled.div.attrs({
  className: 'flex self-center mb3 ml3'
})`
  a {
    text-decoration: none;
    margin-right: 13px;
    h3 {
      font-weight: 300;
      font-size: 2rem;
      color: var(--primary);
    }
  }
`;

export const ProjectFooter = styled(ScrollLink).attrs({
  className: 'flex justify-center'
})`
  bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  img {
    transform: rotate(90deg);
  }

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

export const ContactWrapper = styled.div.attrs({
  className: 'flex flex-column items-center'
})`
  padding-top: 1rem;
  position: relative;

  p {
    align-self: flex-start;
    padding-left: 6rem;
  }

  a {
    text-decoration: none;
    padding-left: 4rem;
    position: relative;
    h3 {
      font-weight: 300;
      font-size: 2rem;
      color: var(--primary);
    }

    :after {
      content: '';
      position: absolute;
      bottom: 2.4rem;
      border-bottom: 1px var(--primary) solid;
      width: calc(100% + 2rem);
    }
  }

  @media (max-width: ${size.tablet}) {
    p {
      padding-left: 0rem;
    }

    a {
      padding-left: 0rem;
      font-weight: 300;
      font-size: 1.5rem;
      align-self: flex-start;

      :after {
        position: relative;
      }
    }
  }
`;

export const Footer = styled(ScrollLink).attrs({
  className: 'flex justify-center'
})`
  position: absolute;
  bottom: 1rem;
  width: calc(100% - 16rem);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  img {
    transform: rotate(90deg);
  }

  :hover {
    transform: scale(1.1);
  }
  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

export const AboutWrapper = styled(LandingWrapper)`
  min-height: 100vh;

  @media (max-width: ${size.tablet}) {
    height: auto;
  }
`;

export const TeamMemberWrapper = styled(LandingWrapper)`
  height: auto;
`;

export const TeamWrapper = styled.div.attrs({
  className: 'flex justify-center items-center w-100 pa2 h-100'
})`
  padding-bottom: 4rem;

  @media (max-width: ${size.tablet}) {
    flex-wrap: wrap;
  }
`;

export const Member = styled.div.attrs({})`
  width: 30%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 100%;
  font-weight: 300;

  @media (max-width: ${size.tablet}) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h3 {
    color: var(--secondary);
  }

  p {
    padding-right: 1rem;
  }
`;

export const MemberLink = styled(Link)`
  text-decoration: none;
  transition: all ease 0.5s;
  color: var(--primary);
  font-weight: 400;
  position: relative;

  :after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0.25rem;
    border-bottom: 1px var(--gray) solid;
    transition: all 0.5s ease-in-out;
    width: calc(100% + 4rem);
  }

  :hover {
    color: var(--secondary);

    :after {
      border-color: var(--secondary);
      width: calc(100% + 6rem);
    }
  }
`;

export const ProfileImgDiv = styled.div.attrs({
  className: ''
})`
  background: url(${props => props.src}) center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  min-height: 150px;
  width: 70%;
  opacity: 0.7;
  position: relative;
  transition: all ease 0.5s;

  :hover {
    opacity: 1;
  }
  :after {
    content: '';
    position: absolute;
    border-bottom: 1px var(--gray) solid;
    width: calc(100% + 30%);
    bottom: 0;
  }
`;

export const ProfileHeader = styled.div.attrs({
  className: 'flex'
})`
  align-items: flex-end;

  img {
    margin-left: 4px;
    margin-bottom: 4px;
    transition: all ease 0.3s;

    :hover {
      transform: scale(1.05);
    }
  }
`;

export const HeadlineDiv = styled.div.attrs({
  className: 'flex flex-column items-center mt1'
})`
  @media (max-width: ${size.tablet}) {
    margin-top: 1rem;

    h2 {
      margin-bottom: 0;
    }
  }
`;

export const FlickityContainer = styled.div.attrs({
  className: ''
})`
  @media (max-width: ${size.laptop}) {
    margin-top: -40px;
  }
  @media (max-width: ${size.tablet}) {
    margin-top: -30px;
  }
  @media (max-width: ${size.mobileXL}) {
    margin-top: -50px;
  }

  @media (max-width: ${size.mobileL}) {
    margin-top: -90px;
  }

  @media (max-width: ${size.mobileM}) {
    margin-top: -115px;
  }
`;

export const ProfileWrapper = styled.div.attrs({ className: 'flex' })`
  position: relative;
  .image {
    position: relative;
    img {
      max-width: 150px;
      max-height: 150px;
      border-left: 1px var(--black) solid;
    }


    /* :after {
      content: "";
      position: absolute;
      border-right: 1px var(--gray) solid;
      height: calc(100% + 2rem);
      right: 0;
    } */
  }
  @media (max-width: ${size.tablet}) {
      flex-direction: column;
      height: 100%;

      .image {
        width: 100vw;
        padding-left: 0rem;
      }

    }
  /* :after {
    content: "";
    position: absolute;
    border-bottom: 1px var(--gray) solid;
    width: 100%;
    max-width: calc(150px + 2rem);
    /* bottom: 0.25rem; */
    /* top: 150px; */
  } */
`;

export const ProfileDescr = styled.div.attrs({
  className: 'flex'
})`
  flex-direction: column;
  padding-left: 1rem;
  padding-top: 0;
  height: auto;

  p {
    margin-top: 0;
  }

  img {
    margin-left: 4px;
    margin-right: 4px;
    margin-bottom: 4px;
    transition: all ease 0.3s;
    width: 30px;
    opacity: 0.7;

    :hover {
      transform: scale(1.05);
    }
  }

  div {
    display: flex;
  }

  @media (max-width: ${size.tablet}) {
    padding-left: 0;
  }
`;

export const BackLink = styled(Link).attrs({})`
  position: absolute;
  top: 1rem;
  left: 1rem;
  text-decoration: none;
  color: var(--secondary);
  cursor: pointer;
  font-weight: 300;
`;

export const ClientsWrapper = styled(LandingWrapper)`
  min-height: 100vh;

  @media (max-width: ${size.tablet}) {
    height: auto;
  }
`;

export const LogoWrapper = styled.div.attrs({
  className: 'flex-wrap justify-center'
})`
  padding-top: 2rem;
  @media (max-width: ${size.tablet}) {
  }
`;

export const LogoDiv = styled.img.attrs({})`
  margin: 4rem;

  @media (max-width: ${size.tablet}) {
    margin: 2rem;
  }
`;

// LINE STYLINGS

const VerticalLine = styled.div.attrs({})`
  height: 100%;
  border-left: 1px solid var(--black);
  position: absolute;
`;
const HorizontalLine = styled.div.attrs({})`
  width: 100%;
  border-top: 1px solid var(--black);
  position: relative;
`;

export const LeftLine = styled(VerticalLine)`
  height: ${props => props.height};
  top: ${props => props.top};
  left: ${props => props.left};
  border-color: ${props => props.borderColor};

  @media (max-width: ${size.tablet}) {
    left: 0;
    display: none;
  }
`;

export const RightLine = styled(VerticalLine).attrs({})`
  height: ${props => props.height};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  border-color: ${props => props.borderColor};

  @media (max-width: ${size.tablet}) {
    right: 0rem;
    display: none;
  }
`;

export const BottomLine = styled(HorizontalLine).attrs({})`
  left: ${props => props.left};
  width: ${props => props.width};

  -webkit-box-shadow: -8px 6px 0px 0px var(--primary);
  -moz-box-shadow: -8px 6px 0px 0px var(--primary);
  box-shadow: -8px 6px 0px 0px var(--primary);

  @media (max-width: ${size.tablet}) {
    width: 0;
  }
`;

export const TopLine = styled(HorizontalLine).attrs({})`
  left: ${props => props.left};
  width: ${props => props.width};
  top: ${props => props.top};

  -webkit-box-shadow: -8px -6px 0px 0px var(--secondary);
  -moz-box-shadow: -8px -6px 0px 0px var(--secondary);
  box-shadow: -8px -6px 0px 0px var(--secondary);

  @media (max-width: ${size.tablet}) {
    width: 0;
  }
`;
export const TopLineNarrow = styled(HorizontalLine).attrs({})`
  left: ${props => props.left};
  width: ${props => props.width};
  top: ${props => props.top};

  @media (max-width: ${size.tablet}) {
    width: 0;
  }
`;
