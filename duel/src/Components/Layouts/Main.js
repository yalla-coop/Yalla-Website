import React, { Component } from 'react';
import Landing from './Landing';
import Intro from './Intro';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Clients from './Clients';
import { ContactLink, Container } from './Main.style';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <ContactLink to="contact" smooth={true} duration={500}>
          contact
        </ContactLink>
        <Landing />
        <Intro />
        <Work />
        <Clients />
        <About />
        <Contact />
      </Container>
    );
  }
}
