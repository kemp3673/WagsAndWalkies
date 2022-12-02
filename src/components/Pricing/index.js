import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  PricingContainer,
  PricingContent,
  PricingH1,
  PricingP,
  PricingList,
  PricingListItem,
  PricingTitle,
  PricingDisclaimer,
  PricingWrapper
} from "./pricingElements";

const Pricing = () => {
  // Initialize Aos to listen and provide global animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <PricingContainer id="pricing">
        <PricingContent>
          <PricingWrapper data-aos="fade-left">
          <PricingH1>Pricing</PricingH1>
          <PricingDisclaimer>* Prices and availability are subject to change</PricingDisclaimer>
          </PricingWrapper>
          <PricingWrapper>
          <PricingList>
            <PricingListItem data-aos="fade-left">
              <PricingTitle>Dog Walking</PricingTitle>
              <PricingP>15 Minute Walk - $15</PricingP>
              <PricingP>30 Minute Walk - $30</PricingP>
            </PricingListItem>
            <PricingListItem data-aos="fade-left">
              <PricingTitle>Pet Bathing</PricingTitle>
              <PricingP>Simple Bath - $25</PricingP>
              <PricingP>Gland Expression - $10</PricingP>
              <PricingP>Nails - $10</PricingP>
            </PricingListItem>
            <PricingListItem data-aos="fade-left">
              <PricingTitle>Home Drop-Ins</PricingTitle>
              <PricingP>Feed/Water - $10</PricingP>
              <PricingP>30 Play/Snuggle Time - $20</PricingP>
            </PricingListItem>
            <PricingListItem data-aos="fade-left">
              <PricingTitle>Training</PricingTitle>
              <PricingP>+$5 to walk price</PricingP>
            </PricingListItem>
          </PricingList>
          </PricingWrapper>
        </PricingContent>
      </PricingContainer>
    </>
  );
};

export default Pricing;
