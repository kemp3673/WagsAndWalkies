import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./testimonials.css";

// Dog Images
import Max from "../../images/testimonials/Max.jpeg";
import Enzo from "../../images/testimonials/Enzo.jpeg";
import Maggie from "../../images/testimonials/Maggie.jpeg";
import Brownie from "../../images/testimonials/Brownie.jpeg";
import Cecil from "../../images/testimonials/Cecil.jpeg";
import Johanna from "../../images/testimonials/Johanna.jpeg";

const Testimonials = () => {
  // Initialize Aos to listen and provide global animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="testimonials">
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={true}
      showStatus={false}
      autoPlay={true}
      interval={5000}
      >
      <div>
        <img
          src={Max}
          alt="Max Testimonial"
        />
        <div className="myCarousel">
          <h3>Ileana</h3>
          <h4>Max's Mom</h4>
          <p>Michaela has been walking my puppy Max for about a month now and I couldn’t have asked for a better dog walker. I know I can trust her to take good care of Max on every walk. She is always on time and never fails to send me a text at the end of each walk. I am so happy that I decided to use her services.</p>
        </div>
      </div>
      <div >
        <img
          src={Johanna}
          alt="Johanna Testimonial"
        />
        <div className="myCarousel">
          <h3>Brian</h3>
          <h4>Johanna's Dad</h4>
          <p>Michaela has been walking my puppy Max for about a month now and I couldn't have asked for a better dog walker. I know I can trust her to take good care of Max on every walk. She is always on time and never fails to send me a text at the end of each walk. I am so happy that I decided to use her services.</p>
        </div>
      </div>
      <div>
        <img
          src={Enzo}
          alt="Enzo Testimonial"
        />
        <div className="myCarousel">
          <h3>Tabitha</h3>
          <h4>Enzo's Mom</h4>
          <p>Cannot recommend Michaela enough! She took care of our little baby girl Enzo last week while we went on vacation! She gave us daily updates and pictures! I knew she was being loved just as much as if she were at home!</p>
        </div>
      </div>
      <div>
        <img
          src= {Maggie}
          alt="Maggie Testimonial"
        />
        <div className="myCarousel">
          <h3>Jessica</h3>
          <h4>Maggie's Mom</h4>
          <p>Tincidunt vitae semper quis lectus nulla at. Cum sociis natoque penatibus et magnis dis parturient montes. Amet purus gravida quis blandit turpis.</p>
        </div>
      </div>
      <div>
        <img
          src= {Brownie}
          alt="Brownie Testimonial"
        />
        <div className="myCarousel">
          <h3>Nyya</h3>
          <h4>Brownie's Mom</h4>
          <p>Tincidunt vitae semper quis lectus nulla at. Cum sociis natoque penatibus et magnis dis parturient montes. Amet purus gravida quis blandit turpis.</p>
        </div>
      </div>
      <div>
        <img
          src= {Cecil}
          alt="Cecil Testimonial"
        />
        <div className="myCarousel">
          <h3>Sarah</h3>
          <h4>Cecil's Mom</h4>
          <p>Tincidunt vitae semper quis lectus nulla at. Cum sociis natoque penatibus et magnis dis parturient montes. Amet purus gravida quis blandit turpis.</p>
        </div>
      </div>
    </Carousel>
    </div>
  );
};

export default Testimonials;
