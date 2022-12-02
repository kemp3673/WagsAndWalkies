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

  /*
  < navigator.maxTouchPoints > is being used to check for mobile device as just pixel width is not enough when the device is in landscape mode. The reason I did not do this for the entire app is that from what I have gathered touch devices like some laptops and all-in-ones will report back as touch devices which will give a mobile view. Figure for all touch devices a hiding nav bar is not a bad idea.
  */

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    // eslint-disable-next-line no-restricted-globals
    if (prevScrollpos < currentScrollPos && (screen.width <= 768 || navigator.maxTouchPoints)) {
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
                offset={-80}
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
                offset={-80}
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
                offset={-80}
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
                offset={-80}
              >Testimonials</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  )
}

export default NavBar;