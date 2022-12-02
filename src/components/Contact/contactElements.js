import styled from "styled-components";

export const ContactContainer = styled.div`
  align-items: center;
  height: fit-content;
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
    background: #ede5db;
    z-index: 1;
  }
`;

export const ContactContent = styled.div`
  height: fit-content;
  border-radius: 12px;
  padding-top: 20px;
  bottom: 20px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  background-color: white; /*TODO update color*/
  @media screen and (max-width: 1009px) {
    flex-direction: column;
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
    width: 80%;
    padding: 20px;
  }
`;

export const ContactLabel = styled.label`
  font-size: 18px;
  margin-bottom: 0.5rem;
  color: #373f41;
  text-align: left;

  @media screen and (max-width: 768px) {
    width: 80vw;
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
  border-bottom: 2px solid #373f41;
  background-color: white; /*TODO update color*/
  font-size: 16px;

  @media screen and (max-width: 768px) {
    border-bottom: 1.5px solid #373f41;
    margin-left: 0;
    width: 80vw;
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

  export const ContactMessage = styled.textarea`
  width: 350px;
  min-height: 50px;
  box-sizing: border-box;
  resize: none;
  overflow: hidden;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid #373f41;
  background-color: white; /*TODO update color*/
  font-size: 16px;

  @media screen and (max-width: 768px) {
    border-bottom: 1.5px solid #373f41;
    margin-left: 0;
    width: 80vw;
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
  background-color: #048c7f; /*TODO update color*/
  color: #fff;
  position: relative;
  border-radius: 8px;
  font-size: 21px;
  cursor: pointer;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, .2);
  :active {
    transform: translateY(3px);
  }
`;

export const SuccessButton = styled.button`
  border: none;
  outline: none;
  width: 150px;
  padding: 10px;
  background-color: #41DF2B; /*TODO update color*/
  color: #373f41;
  position: relative;
  border-radius: 8px;
  font-size: 21px;
  cursor: pointer;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, .2);
`;

export const SendingButton = styled.button`
  border: none;
  outline: none;
  width: 150px;
  padding: 10px;
  background-color: #23B655; /*TODO update color*/
  color: #373f41;
  position: relative;
  border-radius: 8px;
  font-size: 21px;
  cursor: pointer;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, .2);
`;

export const SendingImg = styled.img`
  width: 30px;
  height: 20px;
  object-fit: cover;
`;

export const ContactError = styled.p`
  padding: 10px;
  margin: 10px;
  color: red;
  font-size: 21px;
  width: 80%;
  text-align: center;
`;

export const ContactChars = styled.span`
  font-size: 10px;
  color: #373f41;
`;