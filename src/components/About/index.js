import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PriceToAbout from "../../images/pageImages/priceToAbout.png";
import AboutTransition from "../../images/pageImages/aboutToTestimonials.png";
import OwnerImg from "../../images/pageImages/Owner.jpeg";
import {
  AboutContainer,
  AboutWrapper,
  AboutContent,
  AboutTitle,
  AboutP,
  AboutImg,
  AboutBg,
  AboutToTestimonialBg,
} from "./aboutElements";

const About = () => {
  // Initialize Aos to listen and provide global animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <AboutContainer id="about">
          <AboutBg src={PriceToAbout} alt="Transition image"/>
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
            </AboutWrapper>
            <AboutImg src={OwnerImg} alt="Owner and Dog"/>
          </AboutContent>
          <AboutToTestimonialBg src={AboutTransition} alt="background"/>
      </AboutContainer>
    </>
  );
};

export default About;
