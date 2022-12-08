import styled from "styled-components";

export const AboutContainer = styled.div`
  align-items: center;
  height: 50vh;
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
  padding-top: 60px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 100vw;
    font-size: 40px;
    padding-top: 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AboutP = styled.p`
  margin-top: 4px;
  color: #373f41;
  font-size: 20px;
  max-width: 600px;
  padding: 40px;
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
  max-height: 200px;
  max-width: 500px;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10px;
`;
