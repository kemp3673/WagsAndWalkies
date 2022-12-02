import React from 'react';
import { SplashContainer, SplashContent, SplashH1, SplashP, SplashImage, SplashLogo, SplashLink, SplashPSocial } from './splashElements';
import MainImage from '../../images/pageImages/MainImage.jpeg';
import { BsFacebook } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';



const Splash = () => {
  return (
    <SplashContainer>
      <SplashContent class="hidden">
        <div>
        <SplashH1>Your Friendly Neighborhood Dog Walker</SplashH1>
        <SplashP>
        Whether your energetic lab needs some extra walks or you need someone to feed and snuggle with your tabby cat while you are away, Wags and Walkies is here to help!
        </SplashP>
        <SplashP>
        Happily serving the Kirkwood Place community in Clarksville, TN.
        </SplashP>
        <br/>
        <SplashPSocial>
        Follow us on social media!
        </SplashPSocial>
        <SplashLogo>
          <SplashLink aria-label="TikTok Link" href="https://www.tiktok.com/@saoirsethegolden?_t=8XnUf2MCO3G&_r=1" target="_blank"><FaTiktok /></SplashLink>
          <SplashLink aria-label="FaceBook Link" href="https://www.facebook.com/profile.php?id=100086704342624&mibextid=ZbWKwL" target="_blank"><BsFacebook /></SplashLink>
        </SplashLogo>
        </div>
        <div>
        <SplashImage src={MainImage} alt="Main Site Image"/>
        </div>
      </SplashContent>
    </SplashContainer>
  )
}

export default Splash;