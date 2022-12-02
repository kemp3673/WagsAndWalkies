import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  AboutContainer,
  AboutWrapper,
  AboutContent,
  AboutTitle,
  AboutP,
  AboutImg
} from "./aboutElements";

const About = () => {
  // Initialize Aos to listen and provide global animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <AboutContainer id="about">
          <AboutContent data-aos="fade-right">
          <AboutWrapper>
            <AboutTitle>About Us</AboutTitle>
            </AboutWrapper>
            <AboutWrapper>
            <AboutP>
              Hello, this is the about us section. Eos tota dicunt democritum
              no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere
              epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in
              habeo semper eligendi.
            </AboutP>
            <AboutImg src="https://c8.alamy.com/comp/T85B0N/happy-woman-dog-walker-with-dogs-enjoying-in-funny-walking-outdoors-T85B0N.jpg" alt="Owner and Dog"/>
            </AboutWrapper>
          </AboutContent>
      </AboutContainer>
    </>
  );
};

export default About;
