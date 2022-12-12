import React, { useState } from "react";
import Gallery from "../components/Gallery";
import NavBar from "../components/Navbar";
import SideBar from '../components/SideBar';
import Footer from "../components/Footer";

const GalleryPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Gallery modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <Footer />
    </>
  );
};

export default GalleryPage;
