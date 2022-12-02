import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  ServicesContainer,
  ServicesContent,
  ServicesH1,
  ServicesList,
  ServicesListItem,
  ServicesImage,
  ServicesP,
  ServicesTitle
} from "./servicesElements";
// Icons
import Ball from "../../images/icons/ball.png";
import Bath from "../../images/icons/bath.png";
import Walking from "../../images/icons/dog_walking.png";
import Food from "../../images/icons/food_bowl.png";
import HomeIcon from "../../images/icons/home.png";
import Training from "../../images/icons/training.png";

const Services = () => {
  // Initialize Aos to listen and provide global animation
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <>
      <ServicesContainer id="services">
        <ServicesContent>
          <ServicesH1 data-aos="fade-right">We offer a complete range of services</ServicesH1>
        </ServicesContent>
        <ServicesContent>
          <ServicesList>
            <ServicesListItem data-aos="fade-right">
              <ServicesImage src={Bath} alt="Bath Image" />
              <ServicesTitle>Pet Bathing</ServicesTitle>
              <ServicesP>
                Eos tota dicunt democritum no. Has natum gubergren ne. Est viris
                soleat sadipscing cu. Legere epicuri insolens eu nec, dicit
                virtute urbanitas id nam, qui in habeo semper eligendi.
              </ServicesP>
            </ServicesListItem>
            <ServicesListItem data-aos="fade-right">
              <ServicesImage src={Walking} alt="Walking Image" />
              <ServicesTitle>Dog Walking</ServicesTitle>
              <ServicesP>
                Eos tota dicunt democritum no. Has natum gubergren ne. Est viris
                soleat sadipscing cu. Legere epicuri insolens eu nec, dicit
                virtute urbanitas id nam, qui in habeo semper eligendi.
              </ServicesP>
            </ServicesListItem>
            <ServicesListItem data-aos="fade-right">
              <ServicesImage src={Ball} alt="Ball Image" />
              <ServicesTitle>Play Time</ServicesTitle>
              <ServicesP>
                Eos tota dicunt democritum no. Has natum gubergren ne. Est viris
                soleat sadipscing cu. Legere epicuri insolens eu nec, dicit
                virtute urbanitas id nam, qui in habeo semper eligendi.
              </ServicesP>
            </ServicesListItem>
            <ServicesListItem data-aos="fade-right">
              <ServicesImage src={Food} alt="Food Image" />
              <ServicesTitle>Feeding Stop-Ins</ServicesTitle>
              <ServicesP>
                Eos tota dicunt democritum no. Has natum gubergren ne. Est viris
                soleat sadipscing cu. Legere epicuri insolens eu nec, dicit
                virtute urbanitas id nam, qui in habeo semper eligendi.
              </ServicesP>
            </ServicesListItem>
            <ServicesListItem data-aos="fade-right">
              <ServicesImage src={HomeIcon} alt="HomeIcon Image" />
              <ServicesTitle>Home Drop-Ins</ServicesTitle>
              <ServicesP>
                Eos tota dicunt democritum no. Has natum gubergren ne. Est viris
                soleat sadipscing cu. Legere epicuri insolens eu nec, dicit
                virtute urbanitas id nam, qui in habeo semper eligendi.
              </ServicesP>
            </ServicesListItem>
            <ServicesListItem data-aos="fade-right">
              <ServicesImage src={Training} alt="Training Image" />
              <ServicesTitle>Basic Training</ServicesTitle>
              <ServicesP>
                Eos tota dicunt democritum no. Has natum gubergren ne. Est viris
                soleat sadipscing cu. Legere epicuri insolens eu nec, dicit
                virtute urbanitas id nam, qui in habeo semper eligendi.
              </ServicesP>
            </ServicesListItem>
          </ServicesList>
        </ServicesContent>
      </ServicesContainer>
    </>
  );
};

export default Services;
