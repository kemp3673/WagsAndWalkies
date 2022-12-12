import styled, { keyframes } from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';


const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  //backdrop-filter: blur(5px);
  display: grid;
  align-items: top;
  justify-content: left;
  top: 50px;
  left: 0;
`;

export const SideBarWrapper = styled.div`
  position: absolute;
  width: 50vw;
  height: 100vh;
  right: 0;
  background-color: #373F41;
  animation: ${slideInRight} 0.3s ease-in-out;
`;

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 50px);
  font-weight: bold;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

export const SideBarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 2rem;
  font-size: 1.2rem;
  margin-top: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  font-weight: 100;
  color: white;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

export const SideBarPageLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 2rem;
  font-size: 1.2rem;
  margin-top: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  font-weight: 100;
  color: white;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;
