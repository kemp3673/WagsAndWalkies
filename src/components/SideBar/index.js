import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink } from './sideBarElements';

const SideBar = ({ isOpen, toggle }) => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const homeHandler = () => {
        toggle();
        goToTop();
    };

    return (
        <SideBarContainer id="sidebar" isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink
                        to="/"
                        onClick={toggle}
                        smooth={false}
                        spy={true}
                        duration={500}
                        exact='true'
                        offset={-80}
                        onClick={homeHandler}
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
                        exact='true'
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
                        exact='true'
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
                        exact='true'
                    >
                        Testimonials
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;