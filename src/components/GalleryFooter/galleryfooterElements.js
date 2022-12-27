import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #373F41;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;

  @media screen and (max-width: 820px) {

  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterExternalLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  width: fit-content;
  margin-bottom: 15px;
`;

export const FooterLink = styled.a`
  color: #82B3A4;
  margin: 0 8px;
  cursor: pointer;

  &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.3);
  }
`;
