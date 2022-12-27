import styled from 'styled-components';

export const AttributionModalContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: right;
  top: 0;
  left: 0;
  overflow: hidden;
  display: ${({ showModal }) => (showModal ? 'grid' : 'none')};

  @media screen and (max-width: 768px) {
    animation: 0.5s ease-in-out 0s 1 slideInDown;
    transition: 0.3s ease-in-out;
  }
`;

export const AttributionModalContent = styled.div`
  animation: 0.5s ease-out 0s 1 slideInRight;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  background: #EFF2F1;
  position: relative;
  z-index: 999;
  border-radius: 10px;
  width: 400px;
  height: fit-content;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  line-height: 1.8;
  font-size: 1rem;
  margin-right: 20px;


  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    max-height: 100vh;
    max-width: 100vw;
    margin: 0, auto;
    top: 0;
    left: 0;
    position: fixed;
    border-radius: 0px;
    justify-content: center;
    animation: 0.5s ease-out 0s 1 slideInDown;
    transition: 0.3s ease-in-out;
    align-items: center;
    justify-content: center;
    padding: 0;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0);
  }

  @media screen and (max-width: 480px) {
    height: 100%;
    width: 100%;
    max-height: 100vh;
    max-width: 100vw;
    margin: 0, auto;
    top: 0;
    left: 0;
    position: absolute;
    border-radius: 0px;
    animation: 0.5s ease-out 0s 1 slideInDown;
    transition: 0.3s ease-in-out;
    align-items: center;
    justify-content: center;
    padding: 0;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0);
  }
`;

export const AttributionModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AttributionModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1 rem;
  height: fit-content;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;


export const AttributionModalClose = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  transition:transform 0.1s ease-in-out;
    &:hover {
    transform: scale(1.3);
    color: red;
    }
`;

export const AttributionModalBody = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  height: fit-content;
  width: 100%;
`;

export const AttributionModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

export const AttributionList = styled.ul`
  list-style-type: none;
  margin-left: 10px;
  font-size: 1rem;
`;

export const AttributionListIcon = styled.img`
  height: 30px;
  margin-bottom: -10px;
  padding-top: 5px;
`;