import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  // Initialize Aos to listen and provide global animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <h1 id="testimonials">Testimonials</h1>
  );
};

export default Testimonials;