import React from "react";
import "aos/dist/aos.css";
import WaveTransition from "../../images/pageImages/servicesToPrice.png";
import AboutTransition from "../../images/pageImages/aboutToTestimonials.png";
import {
  PricingContainer,
  PricingContent,
  PricingH1,
  PricingP,
  PricingList,
  PricingListItem,
  PricingTitle,
  PricingDisclaimer,
  PricingWrapper,
  PricingBg,
  AboutToTestimonialBg,
} from "./pricingElements";

const Pricing = () => {
  // AOS animation is initialized within the home.js file
  return (
    <>
      <PricingContainer id="pricing">
      <PricingBg src={WaveTransition} alt="background"/>
        <PricingContent>
          <PricingWrapper data-aos="fade-left">
          <PricingH1>Pricing</PricingH1>
          <PricingDisclaimer>* Prices and availability are subject to change</PricingDisclaimer>
          </PricingWrapper>
          <PricingWrapper>
          <PricingList>
            <PricingListItem data-aos="fade-left">
              <PricingTitle>Dog Walking</PricingTitle>
              <PricingP>15 Minute Walk - $10</PricingP>
              <PricingP>30 Minute Walk - $15</PricingP>
              <PricingP>45 Minute Walk - $20</PricingP>
              <PricingP>60 Minute Walk - $30</PricingP>
            </PricingListItem>
            <PricingListItem data-aos="fade-left">
              <PricingTitle>Pet Bathing</PricingTitle>
              <PricingP>Sm/Md Breeds - $30</PricingP>
              <PricingP>Lg Breeds - $40</PricingP>
              <PricingP>Gland Expression - $10</PricingP>
              <PricingP>Nails - $10</PricingP>
            </PricingListItem>
            <PricingListItem data-aos="fade-left">
              <PricingTitle>Feeding Drop-Ins</PricingTitle>
              <PricingP>Feed/Water - $15/visit</PricingP>
            </PricingListItem>
            <PricingListItem data-aos="fade-left">
              <PricingTitle>Home Drop-Ins</PricingTitle>
              <PricingP>Visit - $15/visit</PricingP>
            </PricingListItem>
            <PricingListItem data-aos="fade-left">
              <PricingTitle>Training</PricingTitle>
              <PricingP>Due to each pets unique needs, please contact to discuss</PricingP>
            </PricingListItem>
          </PricingList>
          </PricingWrapper>
        </PricingContent>
        <AboutToTestimonialBg src={AboutTransition} alt="background"/>
      </PricingContainer>

    </>
  );
};

export default Pricing;
