import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./testimonials.css";

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
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={5000}
      >
      <div >
        <img
          src="https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg"
          alt="1"
        />
        <div className="myCarousel">
          <h3>Title of Testimonial</h3>
          <h4>Dogs Name</h4>
          <p>Consectetur libero id faucibus nisl tincidunt eget. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. In ornare quam viverra orci sagittis. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Varius quam quisque id diam vel quam elementum pulvinar. Id eu nisl nunc mi ipsum faucibus vitae aliquet.</p>
        </div>
      </div>
      <div>
        <img
          src="https://images.dog.ceo/breeds/mountain-swiss/n02107574_2998.jpg"
          alt="2"
        />
        <div className="myCarousel">
          <h3>Title of Testimonial</h3>
          <h4>Dogs Name</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      <div>
        <img
          src="https://images.dog.ceo/breeds/hound-basset/n02088238_10753.jpg"
          alt="3"
        />
        <div className="myCarousel">
          <p>Tincidunt vitae semper quis lectus nulla at. Cum sociis natoque penatibus et magnis dis parturient montes. Amet purus gravida quis blandit turpis. Velit scelerisque in dictum non. </p>
        </div>
      </div>
    </Carousel>
    </div>
  );
};

export default Testimonials;
