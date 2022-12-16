import React, { useEffect, useRef } from "react";
import {
  SideBarContainer,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBarPageLink,
} from "./sideBarElements";
import PawPrint from "../../images/icons/paw_icon.png";

const SideBar = ({ isOpen, toggle }) => {

  // Ref to hold modal element
  let ref = useRef();
  // Handle click outside of modal
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        toggle(false);
      }
    };
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [toggle]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <SideBarContainer id="sidebar" isOpen={isOpen}>
      <SideBarWrapper ref={ref}>
        <img
          src={PawPrint}
          alt="Paw Print"
          style={{ width: "100px", margin: "0 auto", display: "block", paddingTop: "20px" }}
        />
        <SideBarMenu>
          <SideBarLink
            aria-label="Home Link"
            onClick={() => {
              toggle();
              goToTop();
            }}
          >
            Home
          </SideBarLink>
          <SideBarLink
            aria-label="Services Link"
            to="services"
            onClick={toggle}
            smooth={true}
            spy={true}
            duration={500}
            exact="true"
          >
            Services
          </SideBarLink>
          <SideBarLink
            aria-label="Pricing Link"
            to="pricing"
            onClick={toggle}
            smooth={true}
            spy={true}
            duration={500}
            exact="true"
          >
            Pricing
          </SideBarLink>
          <SideBarLink
            aria-label="Testimonials Link"
            to="testimonials"
            onClick={toggle}
            smooth={true}
            spy={true}
            duration={500}
            exact="true"
          >
            Testimonials
          </SideBarLink>
          <SideBarLink
            aria-label="Contact Link"
            to="contact"
            spy={true}
            duration={500}
            exact="true"
            smooth={true}
            offset={-80}
            onClick={() => {
              toggle();
              goToBottom();
            }}
          >
            Contact
          </SideBarLink>
          <SideBarPageLink
            aria-label="Gallery Link"
            to="/gallery"
            smooth={true}
            spy={true}
            duration={500}
            exact="true"
          >
            Gallery
          </SideBarPageLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
