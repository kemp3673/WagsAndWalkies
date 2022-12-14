import React from "react";
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
  // AOS animation is initialized within the home.js file
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
              All baths will include a thorough washing, conditioning treatment (de-shedding conditioner is also available at no extra cost), fully blow drying (Happi Hoodies are available for comfort), a good brushing, and unless otherwise stated finished off with a seasonal dog cologne and bandana. Add ons include nail trims and anal gland expression.
              <br></br>
              <br></br>
              All services will be preformed as tolerated by the dog, to ensure the dogs comfort and my safety.
              </ServicesP>
            </ServicesListItem>
            <ServicesListItem data-aos="fade-right">
              <ServicesImage src={Walking} alt="Walking Image" />
              <ServicesTitle>Dog Walking</ServicesTitle>
              <ServicesP>
              Working long hours and need someone to take your dog out? Have a high energy dog that just needs to burn off some extra steam? Look no further! Walks are taken by individual appointment, so no pack style walks. This ensures each dog gets the individual attention they need. Dogs in the same household may walk together per owner's preference.
              </ServicesP>
            </ServicesListItem>
            <ServicesListItem data-aos="fade-right">
              <ServicesImage src={Ball} alt="Ball Image" />
              <ServicesTitle>Play Time</ServicesTitle>
              <ServicesP>
              Play time can be done at either the dog park or in the grass on a 30 ft leash. A highly engaged play session can be both mentally and physically tiring, and should leave your pup ready for a good nap once they get home! Play time can be combined with a walk or scheduled on its own.
              </ServicesP>
            </ServicesListItem>
            <ServicesListItem data-aos="fade-right">
              <ServicesImage src={Food} alt="Food Image" />
              <ServicesTitle>Feeding Stop-Ins</ServicesTitle>
              <ServicesP>
              Do you keep your pet on a consistent schedule but are in need of someone to help maintain that if your schedule changes? We can provide you and your pet the comfort of knowing their next meal will be on time. This can be combined with any other service or scheduled as needed.
              </ServicesP>
            </ServicesListItem>
            <ServicesListItem data-aos="fade-right">
              <ServicesImage src={HomeIcon} alt="HomeIcon Image" />
              <ServicesTitle>Home Drop-Ins</ServicesTitle>
              <ServicesP>
              Are you traveling but don't want to drop your puppy or kitty off at a kennel? We've got you covered! We can stop by as often as you need to help maintain a consistent schedule for your pet. Medications? No problem! I am both proficient and comfortable administering several types of medications as needed.
              </ServicesP>
            </ServicesListItem>
            <ServicesListItem data-aos="fade-right">
              <ServicesImage src={Training} alt="Training Image" />
              <ServicesTitle>Basic Training</ServicesTitle>
              <ServicesP>
              We specialize in basic commands, leash manners, and impulse control. It is never too early or too late to work with a dog on training. I am happy to work both with the dog individually and with the parents to ensure the highest level of success! I highly value force-free methods and therefore do not employ the use of choke chains or prong collars in my training.
              </ServicesP>
            </ServicesListItem>
          </ServicesList>
        </ServicesContent>
      </ServicesContainer>
    </>
  );
};

export default Services;
