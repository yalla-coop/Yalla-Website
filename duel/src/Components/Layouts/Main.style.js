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
  padding-left: 8rem;
  padding-right: 8rem;
  position: relative;
`;

export const Title = styled.div.attrs({
  className: 'flex justify-center align-center'
})`
  width: 100%;

`;

export const Contact = styled(Link).attrs({
  className: 'flex fixed h3 items-end mp-secondary-color'
})`
  right: 9rem;
  text-decoration: none;
  font-size: 1.25rem;
  z-index: 2;

  :after {
    content: " ";
    position:absolute;
    bottom: 0.25rem;
    border-bottom: 1px var(--secondary) solid;
    width: calc(100% + 3rem);
  }

  :hover {
    color: var(--primary);

    :after {
      border-bottom: 2px var(--primary) solid;
    }
  }

`;

export const IntroHeader = styled.div.attrs({
  className: 'flex flex-column'
})`
  height: 100%;
  padding-top: 8rem;
  justify-content: flex-start;
  padding-left: 1rem;
  padding-right: 1rem;
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

export const SectionWrapper = styled.div.attrs({})`
  height: 100%;
  padding-top: 2.45rem;

  h2 {
    -webkit-text-stroke: 1px var(--secondary);
    color: var(--white);
    font-size: 2rem;
  }
`


// LINE STYLINGS

const VerticalLine = styled.div.attrs({

})`
  height: 100%;
  border-left: 1px solid var(--black);
  position: absolute;

`
const HorizontalLine = styled.div.attrs({})`
  width: 100%;
  border-top: 1px solid var(--black);
  position: relative;
`

export const LeftLine = styled(VerticalLine)`
height: ${props => props.height};
top: ${props => props.top};
left: ${props => props.left};
`

export const RightLine = styled(VerticalLine).attrs({})`
height: ${props => props.height};
top: ${props => props.top};
right: ${props => props.right};
bottom: ${props => props.bottom};
`


export const BottomLine = styled(HorizontalLine).attrs({})`
left: ${props => props.left};
width: ${props => props.width};

  -webkit-box-shadow: -8px 6px 0px 0px var(--primary);
  -moz-box-shadow: -8px 6px 0px 0px var(--primary);
  box-shadow: -8px 6px 0px 0px var(--primary);
`

export const TopLine = styled(HorizontalLine).attrs({})`
left: ${props => props.left};
width: ${props => props.width};
top: ${props => props.top};

  -webkit-box-shadow: -8px -6px 0px 0px var(--secondary);
  -moz-box-shadow: -8px -6px 0px 0px var(--secondary);
  box-shadow: -8px -6px 0px 0px var(--secondary);
`
export const TopLineNarrow = styled(HorizontalLine).attrs({})`
left: ${props => props.left};
width: ${props => props.width};
top: ${props => props.top};
`