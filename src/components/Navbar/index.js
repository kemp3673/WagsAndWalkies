import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  CollapsedIcons,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogoImg,
  NavPageLink,
} from "./navBarElements";
import SiteLogo from "../../images/icons/pawPrint.png";

const NavBar = ({ toggle, isOpen }) => {
  const toggleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  // Check if scrolling down/up and hide/show navbar accordingly
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    // eslint-disable-next-line no-restricted-globals
    if (document.getElementById("navbar") !== null) {
      if (prevScrollpos < currentScrollPos && !isOpen) {
        document.getElementById("navbar").style.top = "-80px";
      } else {
        document.getElementById("navbar").style.top = "0";
      }
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <Nav id="navbar">
        <NavBarContainer>
          <NavLogo
            onClick={toggleHome}
          >
            <NavLogoImg src={SiteLogo} alt="Paw Print Logo" />
            Wags and Walkies
          </NavLogo>
          <CollapsedIcons onClick={toggle}>
            <FaBars size={20} />
          </CollapsedIcons>
          <NavMenu>
            <NavItem>
              <NavLinks
                aria-label="Services Link"
                to="services"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                aria-label="Pricing Link"
                to="pricing"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
              >
                Pricing
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                aria-label="Testimonials Link"
                to="testimonials"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                Testimonials
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                aria-label="Contact Link"
                onClick={toggleContact}
                to="contact"
                smooth={true}
                spy={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavPageLink
                aria-label="Gallery Link"
                to="/gallery"
              >
                Gallery
              </NavPageLink>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
