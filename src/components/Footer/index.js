import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterExternalLink } from './footerElements';

const Footer = ({ toggleModal }) => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>© Wags And Walkies LLC. All rights reserved</FooterLinkTitle>
                <FooterExternalLink onClick={() => toggleModal()}>Icon Attributions</FooterExternalLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer;