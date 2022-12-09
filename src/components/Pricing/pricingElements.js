import styled from "styled-components";

export const PricingContainer = styled.div`
  align-items: center;
  min-height: 50vh;
  position: relative;
  z-index: 3;
  padding-bottom: 0;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FBB156;
    z-index: 1;
  }
`;

export const PricingWrapper = styled.div`
  height: fit-content;
  margin: 0 auto;
  padding-top: 50px;
  z-index: 2;
`;

export const PricingContent = styled.div`
  height: fit-content;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: row;
  max-width: 1100px;
  justify-content: center;
  padding-top: 50px;
  @media screen and (max-width: 1009px) {
    flex-direction: column;
  }
`;

export const PricingH1 = styled.h1`
  color: #5C7B7D;
  width: 200px;
  font-size: 48px;
  text-align: center;
  padding-top: 25px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 100vw;
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const PricingDisclaimer = styled.p`
  margin-top: 2px;
  color: #373f41;
  font-size: 10px;
  text-align: center;
  padding-left: 10px;
  @media screen and (max-width: 768px) {
    font-size: 8px;
  }

  @media screen and (max-width: 480px) {
    font-size: 6px;
  }
`;

export const PricingP = styled.p`
  margin-top: 4px;
  color: #373f41;
  font-size: 20px;
  text-align: justify; //TODO Change to center possibly if it looks weird with actual text

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const PricingList = styled.ul`
  z-index: 3;
  position: relative;
  margin: 10px;
  justify-content: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: fit-content;
  max-width: 700px;

  @media screen and (max-width: 768px) {
    height: fit-content;
    width: 260px;
    margin: 5px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    height: fit-content;
    width: 220px;
    margin: 5px;
  }
`;

export const PricingListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: fit-content;
  width: 300px;
  padding: 15px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    height: fit-content;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    height: fit-content;
  }
`;

export const PricingTitle = styled.h2`
  color: #5C7B7D;
  font-size: 22px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const PricingBg = styled.img`
  z-index: 999;
  width: 100vw;
  max-height: 25%;
  position: absolute;
  margin-bottom: -10px;
  top: 0;
  left: 0;
`;

export const AboutBg = styled.img`
  z-index: 999;
  width: 100vw;
  max-height: 25%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
