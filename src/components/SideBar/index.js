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
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
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
                        // to="education"
                        // onClick={toggle}
                        // smooth={false}
                        // spy={true}
                        // duration={500}
                        // exact='true'
                        offset={-80}
                    >
                        Services
                    </SideBarLink>
                    <SideBarLink
                        // to="experience"
                        // onClick={toggle}
                        // smooth={false}
                        // spy={true}
                        // duration={500}
                        // exact='true'
                        offset={-80}
                    >
                        Pricing
                    </SideBarLink>
                    <SideBarLink
                        // to="employmentHistory"
                        // onClick={toggle}
                        // smooth={false}
                        // spy={true}
                        // duration={500}
                        // exact='true'
                        offset={-80}
                    >
                        About Us
                    </SideBarLink>
                    <SideBarLink
                        // to="contact"
                        // onClick={toggle}
                        // smooth={false}
                        // spy={true}
                        // duration={500}
                        // exact='true'
                        offset={-80}
                    >
                        Testimonials
                    </SideBarLink>
                    <SideBarLink
                        // to="contact"
                        // onClick={toggle}
                        // smooth={false}
                        // spy={true}
                        // duration={500}
                        // exact='true'
                        offset={-80}
                    >
                        Contact Us
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;