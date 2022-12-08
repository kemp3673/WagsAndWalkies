import styled from 'styled-components';

export const SplashContainer = styled.div`
  display: flex;
  //justify-content: center;
  height: fit-content;
  /* min-height: 92vh; */
  position: relative;
  z-index: 3;
  /* background: white; */
  /* vertical-align: middle; */
  background-image: /* linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), */
                  url("https://images.unsplash.com/photo-1593209923604-ee2be874ba53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const SplashContent = styled.div`
  z-index: 3;
  max-width: 500px;
  height: fit-content;
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.61);
  backdrop-filter: blur(5px);
  left: 0;
  /* background: white; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Bg = styled.img`
  z-index: 999;
  width: 100vw;
  max-height: 25%;
  position: absolute;
  margin-bottom: -10px;
  bottom: 0;
  left: 0;
`;

export const SplashH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #DA8C29;
  font-size: 40px;
  text-align: left;
  padding: 0 20px;

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
  color: #5C7B7D;
  font-size: 1.2em;
  text-align: left;
  max-width: 800px;
  height: fit-content;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-left: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SplashPSocial = styled.p `
  margin-top: 24px;
  color: #5C7B7D;
  font-size: 1.2em;
  max-width: 800px;
  height: fit-content;
  padding-right: 20px;
  paddingTop: 30px;
  margin-left: 80px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-left: 0px;
    padding-right: 0;
    text-align: center;
  }
`;

export const SplashImage = styled.img`
  right: 0;
  width: 50vw;
  max-width: 750px;
  height: 92vh;
  //box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);
  object-fit: contain;
  opacity: 0.0;
  /* object-position: left;
  overflow: hidden; */

  @media screen and (max-width: 768px) {
    /* display: none; */
    width: 100vw;
    height: 250px;
    margin-top: 20px;
    /* object-fit: cover; */
    /* object-position: 0px -180px; */
    /* overflow: hidden; */
  }
`;

export const SplashLogo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 3rem;
  margin-top: 24px;
  max-width: 1000px;
  margin-left: 95px;
  filter: drop-shadow(3px 3px 2px #C1D8D6);

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-left: 0;
  }
`;

export const SplashLink = styled.a`
  color: #82B3A4;
  text-decoration: none;
  margin: 0 1rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.3);
  }
`;

