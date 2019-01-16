import styled from 'styled-components';
import { Link } from 'react-router-dom';

// default wrapper 128px pa left and right
const Wrapper = styled.div.attrs({})`
  padding-left: 6rem;
  padding-right: 6rem;
  width: 100vw;
`;

export const LandingWrapper = styled(Wrapper).attrs({
  className: 'vh-100 flex flex-column justify-center'
})`
  border: 1px solid black;
`;

export const Title = styled.div.attrs({
  className: 'flex justify-center align-center'
})`
  width: 100%;

  // h1 {
  //   font-size: 16rem;
  //   text-stroke: 0.5rem transparent;
  //   -webkit-text-stroke: 0.5rem transparent;
  //   background: -webkit-linear-gradient(
  //     -0deg,
  //     var(--gray) 0%,
  //     var(--black) 100%
  //   );
  //   -webkit-background-clip: text;
  // }
`;

export const Contact = styled(Link).attrs({
  className: 'flex fixed h3 items-end mp-primary-color'
})`
  right: 6rem;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

export const IntroHeader = styled.div.attrs({
  className: 'flex flex-column'
})`
  height: 100%;
  padding-top: 8rem;
  justify-content: flex-start;
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
  }
`;
