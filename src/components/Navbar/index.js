import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavBarContainer, NavLogo, CollapsedIcons, NavMenu, NavItem, NavLinks, NavLogoImg } from './navBarElements';
import SiteLogo from '../../images/icons/pawPrint.png';

const NavBar = ({ toggle }) => {
  const toggleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Check if scrolling down/up and hide/show navbar accordingly
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    // eslint-disable-next-line no-restricted-globals
    if (prevScrollpos < currentScrollPos) {
      document.getElementById("navbar").style.top = "-80px";
    } else {
      document.getElementById("navbar").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <Nav id='navbar'>
        <NavBarContainer>
          <NavLogo
            to='/'
            smooth={true}
            spy={true}
            duration={500}
            exact='true'
            onClick={toggleHome}>
              <NavLogoImg src={SiteLogo} alt="Paw Print Logo"/>
              Wags and Walkies
              </NavLogo>
          <CollapsedIcons onClick={toggle}>
            <FaBars />
          </CollapsedIcons>
          <NavMenu>
            <NavItem>
              <NavLinks
                aria-label="Services Link"
                to="services"
                smooth={true}
                spy={true}
                duration={500}
                exact='true'
                // offset={-80}
              >Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                aria-label="Pricing Link"
                to="pricing"
                smooth={true}
                spy={true}
                duration={500}
                exact='true'
                // offset={-80}
              >Pricing</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                aria-label="About Us Link"
                to="about"
                smooth={true}
                spy={true}
                duration={500}
                exact='true'
                // offset={-80}
              >About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                aria-label="Testimonials Link"
                to="testimonials"
                smooth={true}
                spy={true}
                duration={500}
                exact='true'
                // offset={-80}
              >Testimonials</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  )
}

export default NavBar;