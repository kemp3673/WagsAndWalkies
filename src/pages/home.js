import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import SideBar from '../components/SideBar';
import NavBar from '../components/Navbar';
import Splash from '../components/Splash';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Attribution from '../components/IconAttribution';


const Home = () => {
  // Initialize Aos to listen and provide global animation
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
      setShowModal(current => !current);
  };

  return (
    <>
      {isOpen ? <SideBar isOpen={isOpen} toggle={toggle} /> : null}
      <NavBar toggle={toggle} isOpen={isOpen}/>
      <Splash />
      <Attribution toggleModal={ toggleModal }  showModal={ showModal }/>
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer toggleModal={ toggleModal }/>
    </>
  );
}

export default Home;