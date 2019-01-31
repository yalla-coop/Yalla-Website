import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import img from "../../assets/workScreens/EastEnd-Carousel.png";

// media queries

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

// default wrapper 128px pa left and right
const Wrapper = styled.div.attrs({})`
  padding-left: 6rem;
  padding-right: 6rem;
  width: 100vw;
`;

export const LandingWrapper = styled(Wrapper).attrs({
  className: "vh-100 flex flex-column justify-center"
})`
  padding-left: 8rem;
  padding-right: 8rem;
  position: relative;
`;

export const Title = styled.div.attrs({
  className: "flex justify-center align-center"
})`
  width: 100%;
`;

export const ContactLink = styled(ScrollLink).attrs({
  className: "flex fixed h3 items-end mp-secondary-color"
})`
  right: 9rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.25rem;
  z-index: 2;
  transition: all 0.5s ease-in-out;

  :after {
    content: " ";
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
`;

export const IntroHeader = styled.div.attrs({
  className: "flex flex-column"
})`
  height: 100%;
  padding-top: 8rem;
  justify-content: flex-start;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const IntroTextWrapper = styled.div.attrs({
  className: "flex flex-column"
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
  className: "flex flex-column"
})`
  height: 100%;
  padding-top: 2.45rem;
  h2 {
    -webkit-text-stroke: 1px var(--secondary);
    color: var(--white);
    font-size: 2rem;
  }
`;

export const ImageWrapper = styled.div.attrs({ className: "w-100" })`
  padding: 3rem;
  padding-left: 0;
  /* height: 400px; */
`;

export const CarousselWrapper = styled.div.attrs({
  className: "w-80 flex flex-column self-center"
})`
  .flickity-custom {
    transition: all 0.5s ease;

    :hover {
      transform: scale(1.05);
    }
  }
`;

export const ImageDiv = styled.div.attrs({
  className: "w-100 self-center"
})`
  background: url(${props => props.src}) center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 400px;

  @media ${device.tablet} {
    height: 300px;
  }
  @media ${device.mobileL} {
    height: 250px;
  }
  @media ${device.mobileS} {
    height: 100px;
  }
`;

export const ContactWrapper = styled.div.attrs({
  className: "flex flex-column items-center"
})`
  padding-top: 1rem;
  position: relative p {
    align-self: flex-start;
    padding-left: 6rem;
  }

  a {
    text-decoration: none;
    padding-left: 6rem;
    h3 {
      font-weight: 300;
      font-size: 2rem;
      color: var(--primary);
    }

    :after {
      content: "";
      position: absolute;
      bottom: 2.4rem;
      border-bottom: 1px var(--primary) solid;
      width: calc(100% - 10rem);
    }
  }
`;

export const Footer = styled(ScrollLink).attrs({
  className: "flex justify-center"
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
`;

export const TeamWrapper = styled.div.attrs({
  className: "flex justify-center items-center w-100 pa2 h-100"
})`
  padding-bottom: 4rem;
`;

export const Member = styled.div.attrs({})`
  width: 30%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 100%;
  font-weight: 300;

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
    content: " ";
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
  className: ""
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
    content: "";
    position: absolute;
    border-bottom: 1px var(--gray) solid;
    width: calc(100% + 30%);
    bottom: 0;
  }
`;

export const ProfileHeader = styled.div.attrs({
  className: "flex"
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

export const ProfileWrapper = styled.div.attrs({ className: "flex" })`
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
  className: "flex"
})`
  flex-direction: column;
  padding-left: 1rem;
  padding-top: 0;
  height: 100%;

  p {
    margin-top: 0;
  }

  img {
    margin-left: 4px;
    margin-bottom: 4px;
    transition: all ease 0.3s;

    :hover {
      transform: scale(1.05);
    }
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
`;

export const RightLine = styled(VerticalLine).attrs({})`
  height: ${props => props.height};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  border-color: ${props => props.borderColor};
`;

export const BottomLine = styled(HorizontalLine).attrs({})`
  left: ${props => props.left};
  width: ${props => props.width};

  -webkit-box-shadow: -8px 6px 0px 0px var(--primary);
  -moz-box-shadow: -8px 6px 0px 0px var(--primary);
  box-shadow: -8px 6px 0px 0px var(--primary);
`;

export const TopLine = styled(HorizontalLine).attrs({})`
  left: ${props => props.left};
  width: ${props => props.width};
  top: ${props => props.top};

  -webkit-box-shadow: -8px -6px 0px 0px var(--secondary);
  -moz-box-shadow: -8px -6px 0px 0px var(--secondary);
  box-shadow: -8px -6px 0px 0px var(--secondary);
`;
export const TopLineNarrow = styled(HorizontalLine).attrs({})`
  left: ${props => props.left};
  width: ${props => props.width};
  top: ${props => props.top};
`;
