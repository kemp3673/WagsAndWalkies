import React, { useState } from "react";
import { Images } from "./imageData.js";
import { IoCloseSharp } from "react-icons/io5";
import {
  GalleryContainer,
  GalleryWrapper,
  GalleryCard,
  GalleryImg,
  GalleryModal,
  GalleryCloseBtn,
  GalleryModalImg,
  GalleryTitle,
  GalleryReturnBtn,
  GalleryReturnIcon,
  GalleryReturnTitle,
  GalleryReturnWrapper,
  GalleryReturnContainer,
} from "./galleryElements";

const Gallery = ({ modalIsOpen, setModalIsOpen }) => {
  const [image, setImage] = useState("");

  const openModal = (image) => {
    setImage(image);
    setModalIsOpen(true);
  };

  return (
    <>
    <GalleryReturnContainer>
        <GalleryReturnWrapper>
        <GalleryReturnBtn
          to="/"
          smooth={true}
          spy={true}
          duration={500}
          exact="true"
        >
          <GalleryReturnIcon/>
          <GalleryReturnTitle>Return Home</GalleryReturnTitle>
        </GalleryReturnBtn>
        </GalleryReturnWrapper>
        </GalleryReturnContainer>
      <GalleryContainer>
        <GalleryModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          image={image}
        >
          <GalleryCloseBtn>
            <IoCloseSharp
              color="white"
              fontSize="1.5em"
              size={30}
              onClick={() => setModalIsOpen(false)}
            />
          </GalleryCloseBtn>
          <GalleryModalImg src={image.imgSrc} alt={image.imgAlt} />
        </GalleryModal>
        {/* <GalleryTitle>Our Satisfied Clients</GalleryTitle> */}
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
