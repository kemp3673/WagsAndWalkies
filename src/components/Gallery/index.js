import React, { useState, useRef, useEffect } from "react";
import { Images } from "./imageData.js";
import { IoCloseSharp } from "react-icons/io5";
import {
  GalleryContainer,
  GalleryWrapper,
  GalleryCard,
  GalleryImg,
  GalleryModalWrapper,
  GalleryCloseBtn,
  GalleryModalImg,
  GalleryReturnBtn,
  GalleryReturnIcon,
  GalleryReturnTitle,
  GalleryReturnWrapper,
  GalleryReturnContainer,
} from "./galleryElements";

const Gallery = ({ modalIsOpen, setModalIsOpen }) => {
  // Scroll to top of page when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Ref to hold modal element
  let ref = useRef();
  // Handle click outside of modal
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setModalIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setModalIsOpen]);
  // Prevent vertical scroll when sidebar is open
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
}, [modalIsOpen]);

  // State to hold image to be displayed in modal
  const [image, setImage] = useState("");
  // Toggle modal and sets image to be displayed
  const openModal = (image) => {
    setImage(image);
    setModalIsOpen(true);
  };

  return (
    <>
      <GalleryReturnContainer id="gallery">
        <GalleryReturnWrapper>
          <GalleryReturnBtn
            to="/"
            smooth={true}
            spy={true}
            duration={500}
            exact="true"
          >
            <GalleryReturnIcon />
            <GalleryReturnTitle>Return Home</GalleryReturnTitle>
          </GalleryReturnBtn>
        </GalleryReturnWrapper>
      </GalleryReturnContainer>
      <GalleryContainer>
          <GalleryModalWrapper
            modalIsOpen={modalIsOpen}
          >
            <GalleryCloseBtn>
              <IoCloseSharp
                color="white"
                fontSize="1.5em"
                size={30}
                onClick={() => setModalIsOpen(false)}
              />
            </GalleryCloseBtn>
            <GalleryModalImg src={image.imgSrc} alt={image.imgAlt} ref={ref} />
          </GalleryModalWrapper>
        <GalleryWrapper>
          {Images.map((image) => {
            return (
              <GalleryCard key={image.id} onClick={() => openModal(image)}>
                <GalleryImg src={image.imgSrc} alt={image.imgAlt} />
              </GalleryCard>
            );
          })}
        </GalleryWrapper>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
