import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import {
  SendButton,
  SuccessButton,
  SendingButton,
  ContactError,
  DotTyping,
  AnimationWrapper,
} from "./contactElements";
import { formValidation as validator } from "./formValidation";
import { BsCheckLg } from "react-icons/bs";

const ContactButton = ({ formValues, setFormErrors }) => {

  // Buttons to be displayed based on action and state
  const conditionalButtons = [
    <SendButton onClick={() => setHandleSubmit(true)}>Send</SendButton>,
    <SendingButton>
      Sending{" "}
      <AnimationWrapper>
        <DotTyping />
      </AnimationWrapper>
    </SendingButton>,
    <SuccessButton>
      Sent
      <BsCheckLg style={{ transform: "translateY(4px)", marginLeft: "8px" }} />
    </SuccessButton>,
  ];

  // State values
  const [canSend, setCanSend] = useState(null);
  const [handleSubmit, setHandleSubmit] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [currentButton, setCurrentButton] = useState(conditionalButtons[0]);

  // STEP 1: When Send button is clicked, triggers handleSend
  useEffect(() => {
    if (handleSubmit) {
      setTimeout(() => {
        setHandleSubmit(false);
      }, 5000);
      handleSend();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSubmit]);

  // Step 2: Method to begin form submission
  const handleSend = useCallback(() => {
    let errors = validator(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setCanSend(true);
    }
  }, [formValues, setFormErrors]);

  // STEP 3: When canSend is true
  useEffect(() => {
    if (canSend === true) {
      setCurrentButton(conditionalButtons[1]);
      sendMessage(formValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canSend]);

  // STEP 4: Method to send form data to server
  const sendMessage = () => {
    let body = {
      type: `${formValues.contact}`,
      message: `${formValues.message}`,
      firstName: `${formValues.firstName}`,
      lastName: `${formValues.lastName}`,
      email: `${formValues.email}`,
      phone: `${formValues.phone}`,
    };
    axios
      .post("/contact", body)
      .then((res) => {
        setCurrentButton(conditionalButtons[2]);
      })
      .catch((err) => setMailError(err.message));
  };

  return (
    <>
      {/* Display Current button based on activity */}
      {currentButton}
      {mailError ? (
        <ContactError>There was a problem sending your message</ContactError>
      ) : null}
    </>
  );
};

export default ContactButton;
