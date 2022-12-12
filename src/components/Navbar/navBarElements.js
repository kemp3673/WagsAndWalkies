import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: rgba(193, 216, 214, 0.8);
  box-shadow: 0 0 25px 0 black;
  backdrop-filter: blur(5px);
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 99;
  transition: top 0.5s ease-in-out;
  @media screen and (max-width: 860px) {
    height: 80px;
  }
  @media screen and (max-width: 768px) {
    height: 50px;
  }
`;
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;
`;

export const NavLogo = styled(LinkR)`
  color: #5C7B7D;
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
    top: 5px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #5C7B7D;
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
  color: #5C7B7D;
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
    text-decoration: underline;
  }
`;

export const NavPageLink = styled(LinkR)`
  color: #5C7B7D;
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
`;
export const NavLogoImg = styled.img`
  height: 75%;
`;