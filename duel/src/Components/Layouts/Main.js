import React, { Component } from "react";
import Landing from "./Landing";
import Intro from "./Intro";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import { ContactLink } from "./Main.style";

export default class Main extends Component {
  render() {
    return (
      <div>
        <ContactLink to="contact" smooth={true} duration={500}>
          contact
        </ContactLink>
        <Landing />
        <Intro />
        <Work />
        <About />
        <Contact />
      </div>
    );
  }
}
