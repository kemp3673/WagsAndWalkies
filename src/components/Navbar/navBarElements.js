import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: #89D5D2;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 99;
  transition: top 0.3s ease-in-out;
`;
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #373F41;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
  `;


export const CollapsedIcons = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #373F41;
    &:hover {
    transition: all 0.2s ease-in-out;
    filter: drop-shadow(0px 0px 15px grey);
  }
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #373F41;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 0 1rem;
  height: 75px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
  &.active {
    border-bottom: 5px solid #01bfaf;
  }
`;

export const NavLogoImg = styled.img`
  height: 75%;
`;