import styled from "styled-components";

export const AboutContainer = styled.div`
  align-items: center;
  min-height: 50vh;
  position: relative;
  z-index: 3;
  padding-bottom: 80px;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #EAD6BD;
    z-index: 1;
  }
`;

export const AboutWrapper = styled.div`
  height: fit-content;
  margin: 0 auto;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export const AboutContent = styled.div`
  height: fit-content;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  display: flex;
  padding-top: 80px;
  flex-direction: row;
  max-width: 1100px;
  justify-content: center;
  @media screen and (max-width: 1009px) {
    flex-direction: column;
  }
`;

export const AboutTitle = styled.h1`
  color: #5C7B7D;
  width: 200px;
  font-size: 48px;
  text-align: center;
  z-index: 3;
  padding-top: 80px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 100vw;
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AboutP = styled.p`
  margin: 14px;
  color: #373f41;
  font-size: 20px;
  max-width: 600px;
  padding: 80px;
  text-align: justify; //TODO Change to center possibly if it looks weird with actual text

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 0px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const AboutImg = styled.img`
  max-height: 300px;
  border-radius: 50%;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const AboutBg = styled.img`
  z-index: 999;
  width: 100vw;
  max-height: 25%;
  position: absolute;
  margin-bottom: -10px;
  top: 0;
  left: 0;
`;
export const AboutToTestimonialBg = styled.img`
  z-index: 999;
  width: 100vw;
  max-height: 25%;
  position: absolute;
  margin-bottom: -100px;
  bottom: 0;
  left: 0;
`;
