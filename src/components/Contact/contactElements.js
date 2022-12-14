import styled from "styled-components";
import { keyframes } from "styled-components";
import ContactBackground from "../../images/pageImages/ContactBackground.jpg";


// TODO fix mobile view form size. Currently it is offset due to form itself being too large.
export const ContactContainer = styled.div`
  display: flex;
  height: fit-content;
  position: relative;
  z-index: 3;
  padding: 20px;
  overflow-x: hidden;
  :before {
    content: " ";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(white, black), url(${ContactBackground});
    background-blend-mode: saturation;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: sepia(30%);
  }
`;

export const ContactContent = styled.div`
  height: fit-content;
  border-radius: 12px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  background-color: white;
  @media screen and (max-width: 1009px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    width: 90vw;
    margin: 0 0;
  }
`;

export const ContactWrapper = styled.div`
  height: fit-content;
  margin: 0 auto;
  z-index: 2;
  margin-bottom: 30px;
`;

export const ContactHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
`;

export const ContactTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: #373f41;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 80vw;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 60vw;
    padding: 20px;
  }
`;

export const ContactLabel = styled.label`
  font-size: 18px;
  margin-bottom: 0.5rem;
  color: #373f41;
  text-align: left;

  @media screen and (max-width: 768px) {
    width: 60vw;
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ContactInput = styled.input`
  width: 350px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0;
  border-bottom: 1.5px solid #373f41;
  background-color: white;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 60vw;
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ContactMessage = styled.textarea`
  width: 365px;
  min-height: 50px;
  box-sizing: border-box;
  resize: none;
  overflow: hidden;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0;
  border-bottom: 1.5px solid #373f41;
  background-color: white;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 64vw;
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const SendButton = styled.button`
  border: none;
  outline: none;
  width: 150px;
  padding: 10px;
  background-color: #5c7b7d;
  color: #fff;
  position: relative;
  border-radius: 8px;
  font-size: 21px;
  cursor: pointer;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.2);
  &:active {
    transform: translateY(3px);
  }
`;

export const SuccessButton = styled.button`
  border: none;
  outline: none;
  width: 150px;
  padding: 10px;
  background-color: #c1d8d6;
  color: #373f41;
  position: relative;
  border-radius: 8px;
  font-size: 21px;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const SendingButton = styled.button`
  border: none;
  outline: none;
  width: 150px;
  padding: 10px 10px 10px 0;
  padding-left: 15px;
  text-align: left;
  background-color: #82b3a4;
  color: #373f41;
  position: relative;
  border-radius: 8px;
  font-size: 21px;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const SendingImg = styled.img`
  width: 30px;
  height: 20px;
  object-fit: cover;
`;

export const ContactError = styled.p`
  padding: 2px;
  margin-top: 10px;
  color: red;
  font-size: 16px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ContactChars = styled.span`
  font-size: 12px;
  color: #373f41;
`;

const DotTypingAnimation = keyframes`
  0% {
    box-shadow: 9984px 0 0 0 #373f41, 9999px 0 0 0 #373f41, 10014px 0 0 0 #373f41;
  }
  16.667% {
    box-shadow: 9984px -10px 0 0 #373f41, 9999px 0 0 0 #373f41, 10014px 0 0 0 #373f41;
  }
  33.333% {
    box-shadow: 9984px 0 0 0 #373f41, 9999px 0 0 0 #373f41, 10014px 0 0 0 #373f41;
  }
  50% {
    box-shadow: 9984px 0 0 0 #373f41, 9999px -10px 0 0 #373f41, 10014px 0 0 0 #373f41;
  }
  66.667% {
    box-shadow: 9984px 0 0 0 #373f41, 9999px 0 0 0 #373f41, 10014px 0 0 0 #373f41;
  }
  83.333% {
    box-shadow: 9984px 0 0 0 #373f41, 9999px 0 0 0 #373f41, 10014px -10px 0 0 #373f41;
  }
  100% {
    box-shadow: 9984px 0 0 0 #373f41, 9999px 0 0 0 #373f41, 10014px 0 0 0 #373f41;
  }
`;

export const DotTyping = styled.div`
  position: relative;
  left: -9999px;
  width: 6px;
  height: 6px;
  border-radius: 5px;
  background-color: #373f41;
  color: #373f41;
  box-shadow: 9984px 0 0 0 #373f41, 9999px 0 0 0 #373f41, 10014px 0 0 0 #373f41;
  animation-name: ${DotTypingAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

export const AnimationWrapper = styled.div`
  position: absolute;
  left: 115px;
  bottom: 15px;
`;

export const ContactRadio = styled.input`
  margin-right: 10px;
  margin-left: 5px;
  margin-bottom: 15px;
  accent-color: auto;
`;
