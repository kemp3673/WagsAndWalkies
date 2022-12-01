import styled from 'styled-components';


export const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 30px;
  height: fit-content;
  min-height: 90vh;
  position: relative;
  z-index: 3;
  background: #E0D8B4;
  vertical-align: middle;
`;

export const SplashContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  height: fit-content;
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #E0D8B4;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SplashH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #373F41;
  font-size: 40px;
  text-align: left;
  padding-right: 20px;

  @media screen and (max-width: 768px) {
    font-size: 38px;
    padding-top: 20px;
    padding-left: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SplashP = styled.p`
  margin-top: 24px;
  color: #373F41;
  font-size: 1.2em;
  text-align: left;
  max-width: 800px;
  height: fit-content;
  padding-right: 20px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-left: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SplashImage = styled.img`
  right: 0;
  width: 50vw;
  max-width: 750px;
  height: 90vh;
  object-fit: cover;
  object-position: left;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 400px;
    padding-top: 20px;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
  }
`;

export const SplashLogo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 3rem;
  margin-top: 24px;
  max-width: 1000px;
  margin-left: 65px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const SplashLink = styled.a`
  color: #373F41;
  text-decoration: none;
  margin: 0 1rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.3);
  }
`;

