import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MdOutlineArrowBackIos as Icon} from "react-icons/md";

export const GalleryContainer = styled.div`
  background: #373F41;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  position: relative;
  z-index: 1;
`;

export const GalleryWrapper = styled.div`
  max-width: 1200px;
  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 4;
  -webkit-column-width: 25%;
  -moz-column-width: 25%;
  column-width: 25%;
  padding: 6px 6px;
  @media screen and (max-width: 768px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    -webkit-column-width: 50%;
    -moz-column-width: 50%;
    column-width: 50%;
  }
`;

export const GalleryTitle = styled.h1`
  font-size: 2.5rem;
  padding-top: 20px;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const GalleryCard = styled.div`
  padding: 5px 0px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const GalleryImg = styled(LazyLoadImage)`
  width: 100%;
  height: auto;
`;

export const GalleryModal = styled.div`
  display: ${({ modalIsOpen }) => (modalIsOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.95);
  z-index: 999;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease-in-out;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;


export const GalleryCloseBtn = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;
  cursor: pointer;
`;

export const GalleryModalImg = styled.img`
  width: auto;
  max-width: 90%;
  height: auto;
  max-height: 90%;
  margin: 0 auto;
  display: block;
`;

export const GalleryReturnBtn = styled(LinkR)`
  display: block;
  position: relative;
  text-decoration: none;
  justify-self: flex-start;
  font-size: 1.5rem;
  font-weight: bold;
  color: #5C7B7D;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const GalleryReturnIcon = styled(Icon)`
  vertical-align: bottom;
  padding-bottom: 2px;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding-bottom: 0;
  }
`;

export const GalleryReturnTitle = styled.span`
  margin-top: 20px;
`;

export const GalleryReturnWrapper = styled.div`

  display: flex;
  justify-content: left;
  align-items: center;
  width: 100vw;
  max-width: 1200px;
`;

export const GalleryReturnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  height: 50px;
  background: rgba(193, 216, 214, 0.8);
  box-shadow: 0 0 25px 0 black;
  backdrop-filter: blur(5px);
`;