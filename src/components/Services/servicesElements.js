import styled from "styled-components";

export const ServicesContainer = styled.div`
  align-items: center;
  height: fit-content;
  min-height: 100vh;
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
    background: #EFF2F1;
    z-index: 1;
  }
`;

export const ServicesContent = styled.div`
  height: fit-content;
  margin: 0 auto;
  z-index: 2;
  max-width: 1200px;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const ServicesH1 = styled.h1`
  color: #5C7B7D;
  width: 30vw;
  font-size: 48px;
  text-align: center;
  padding-top: 25px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    width: 100vw;
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ServicesList = styled.ul`
  z-index: 3;
  position: relative;
  margin: 10px;
  justify-content: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: fit-content;

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

export const ServicesListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: fit-content;
  width: 300px;
  padding: 15px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 18px;
    height: fit-content;
    width: 260px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    font-size: 14px;
    height: fit-content;
    width: 220px;
  }
`;

export const ServicesImage = styled.img`
  max-height: 150px;
  margin-bottom: -20px;
`;

export const ServicesTitle = styled.h2`
  color: #373F41;
  font-size: 22px;
  text-align: center;
  z-index: 3;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ServicesP = styled.p`
  margin-top: 4px;
  color: #373F41;
  font-size: 20px;
  text-align: justify; //TODO Change to center possibly if it looks weird with actual text

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
