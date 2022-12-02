import React from "react";
import $ from 'jquery';
// Styled Components
import {
  AttributionModalContainer,
  AttributionModalWrapper,
  AttributionModalContent,
  AttributionModalHeader,
  AttributionModalTitle,
  AttributionModalClose,
  AttributionModalBody,
  AttributionList,
  AttributionListIcon
} from "./iconElements";
// Icons
import { CgClose } from "react-icons/cg";
import Ball from "../../images/icons/ball.png";
import Bath from "../../images/icons/bath.png";
import Walking from "../../images/icons/dog_walking.png";
import Food from "../../images/icons/food_bowl.png";
import HomeIcon from "../../images/icons/home.png";
import Paw from "../../images/icons/pawPrint.png";
import Training from "../../images/icons/training.png";
import TabIcon from "../../images/icons/paw_icon.png";
import SendingDots from '../../images/icons/ellipse-dots.gif';

const Attribution = ({ toggleModal, showModal }) => {
  const handleModalClose = (e) => {
    if (!$(e.target).closest("#modal").length) {
      toggleModal();
    }
  };

  return (
    <>
      <AttributionModalContainer
        onClick={(e) => handleModalClose(e)}
        toggleModal={toggleModal}
        showModal={showModal}
      >
        <AttributionModalWrapper>
          <AttributionModalContent id="modal">
            <AttributionModalHeader>
              <AttributionModalTitle>Icon Attributions</AttributionModalTitle>
              <AttributionModalClose onClick={() => toggleModal()}>
                <CgClose />
              </AttributionModalClose>
              <AttributionModalBody>
                <AttributionList>
                  {/* Make li named component and tell it to flex row to get the icon and text next to each other. */}
                  <li>
                    <AttributionListIcon src={TabIcon} alt="Tab Icon"/>
                    <p>Created by Freepik from flaticon.com</p>
                  </li>
                  <li>
                    <AttributionListIcon src={Ball} alt="Ball Icon" />
                    <p>Created by Sami from thenounproject.com</p>
                  </li>
                  <li>
                    <AttributionListIcon src={Bath} alt="Bath Icon" />
                    <p>Created by Made from thenounproject.com</p>
                  </li>
                  <li>
                    <AttributionListIcon src={Walking} alt="Walking Icon" />
                    <p>Created by DT. Creative Lab from thenounproject.com</p>
                  </li>
                  <li>
                    <AttributionListIcon src={HomeIcon} alt="Home Icon" />
                    <p>Created by vlodimer from thenounproject.com</p>
                  </li>
                  <li>
                    <AttributionListIcon src={Food} alt="Food Icon" />
                    <p>Created by Andre Buand from thenounproject.com</p>
                  </li>
                  <li>
                    <AttributionListIcon src={Paw} alt="Paw Icon" />
                    <p>Created by Nico Bökenkröger from thenounproject.com</p>
                  </li>
                  <li>
                    <AttributionListIcon src={Training} alt="Training Icon" />
                    <p>Created by Delsart Olivia from thenounproject.com</p>
                  </li>
                  <li>
                    <AttributionListIcon src={SendingDots} alt="Dots Animated Icon" />
                    <p>Created by Sobamachine from tenor.com</p>
                  </li>
                </AttributionList>
              </AttributionModalBody>
            </AttributionModalHeader>
          </AttributionModalContent>
        </AttributionModalWrapper>
      </AttributionModalContainer>
    </>
  );
};

export default Attribution;
