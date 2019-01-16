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

  :after {
    content: " ";
    position:absolute;
    bottom: 0.25rem;
    border-bottom: 1px var(--secondary) solid;
    width: calc(100% + 3rem);
  }

  :hover {
    text-decoration: underline;
  }

`;

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

export const LeftLine = styled(VerticalLine).attrs({})`
top: 6rem;
height: calc(100% - 6rem);
`

export const RightLine = styled(VerticalLine).attrs({})`
right: 8rem;
top: 0;
height: 80%; `

export const BottomLine = styled(HorizontalLine).attrs({})`
  left: -4rem;
  width: calc(100% + 9rem);

  -webkit-box-shadow: -8px 6px 0px 0px var(--primary);
  -moz-box-shadow: -8px 6px 0px 0px var(--primary);
  box-shadow: -8px 6px 0px 0px var(--primary);
`