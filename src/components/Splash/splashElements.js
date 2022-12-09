import styled from "styled-components";

export const SplashContainer = styled.div`
  display: flex;
  min-height: 100vh;
  height: fit-content;
  position: relative;
  z-index: 3;
  background-image: url("https://images.unsplash.com/photo-1593209923604-ee2be874ba53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"); /* Image provided by Ivan Calderon via Unsplash */
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const SplashContent = styled.div`
  z-index: 3;
  max-width: 500px;
  height: fit-content;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.61);
  backdrop-filter: blur(5px);

  @media screen and (max-width: 768px) {
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
  width: 60%;
  justify-content: center;
  align-items: center;
  color: #da8c29;
  font-size: 40px;
  text-align: left;
  /* padding: 20px 20px; */
  padding-left: 20px;
  padding-bottom: 50px;
  /* padding-top: 20px; */
  font-weight: bold;
  filter: drop-shadow(1px 1px 0.5px #252626);

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 40px;
    margin-left: 20px;
    margin-right: 20px;
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

export const SplashP = styled.p`
  margin-top: 24px;
  color: #5c7b7d;
  font-size: 1.4em;
  text-align: justify;
  max-width: 800px;
  height: fit-content;
  padding: 0 20px;
  filter: drop-shadow(0.5px 0.5px 0.3px #252626);
`;
