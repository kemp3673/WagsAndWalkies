import React, { useState } from "react";
import Gallery from "../components/Gallery";
import GalleryFooter from "../components/GalleryFooter";

const GalleryPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Gallery modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <GalleryFooter />
    </>
  );
};

export default GalleryPage;
