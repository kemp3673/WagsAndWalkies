import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Splash from '../components/Splash';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Attribution from '../components/IconAttribution';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
      setShowModal(current => !current);
  };
  //TODO Add scroll animations to application
  //TODO Add SVG wave to background once color is selected ... https://www.shapedivider.app/

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <Splash />
      <Attribution toggleModal={ toggleModal }  showModal={ showModal }/>
      <Services />
      <Pricing />
      <About />
      <Testimonials />
      <Contact />
      <Footer toggleModal={ toggleModal }/>
    </>
  );
}

export default Home;