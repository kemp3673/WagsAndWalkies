import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterExternalLink,
  FooterLogo,
  FooterLink,
} from "./galleryfooterElements";

const Footer = ({ toggleModal }) => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>
                  © Wags And Walkies LLC. All rights reserved
                </FooterLinkTitle>
                <FooterLogo>
                  <FooterLink
                    aria-label="TikTok Link"
                    href="https://www.tiktok.com/@saoirsethegolden?_t=8XnUf2MCO3G&_r=1"
                    target="_blank"
                  >
                    <FaTiktok />
                  </FooterLink>
                  <FooterLink
                    aria-label="FaceBook Link"
                    href="https://www.facebook.com/profile.php?id=100086704342624&mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <BsFacebook />
                  </FooterLink>
                </FooterLogo>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;

