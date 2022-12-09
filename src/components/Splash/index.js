import React from "react";
import {
  SplashContainer,
  SplashContent,
  SplashH1,
  SplashP,
  Bg,
} from "./splashElements";
import Wave from "../../images/pageImages/wave.png";

const Splash = () => {
  return (
    <SplashContainer>
      <Bg src={Wave} alt="background"/>
      <SplashContent>
        <div style={{paddingBottom:"50px"}}>
          <SplashH1>Your Friendly Neighborhood Dog Walker</SplashH1>
          <SplashP>
            Whether your energetic lab needs some extra walks or you need
            someone to feed and snuggle with your tabby cat while you are away,
            Wags and Walkies is here to help!
          </SplashP>
          <SplashP>
            Happily serving the Kirkwood Place community in Clarksville, TN.
          </SplashP>
        </div>
      </SplashContent>
    </SplashContainer>
  );
};

export default Splash;
