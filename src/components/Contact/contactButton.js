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
    // Default button
    <SendButton onClick={() => setHandleSubmit(true)}>Send</SendButton>,
    // Sending button with animation
    <SendingButton>
      Sending{" "}
      <AnimationWrapper>
        <DotTyping />
      </AnimationWrapper>
    </SendingButton>,
    // Success button
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
    // Send form values to validator to check for errors
    let errors = validator(formValues);
    // Any errors returned are set to state
    setFormErrors(errors);
    // Check if any errors were returned
    if (Object.keys(errors).length === 0) {
      // If no errors, set canSend to true
      setCanSend(true);
    }
  }, [formValues, setFormErrors]);

  // STEP 3: When canSend is true
  useEffect(() => {
    if (canSend === true) {
      // Change button to sending button
      setCurrentButton(conditionalButtons[1]);
      // Invoke sendMessage method to send form data to server
      sendMessage(formValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canSend]);

  // STEP 4: Method to send form data to server
  const sendMessage = () => {
    // Form field default values
    let body = {
      message: `${formValues.message}`,
      firstName: `${formValues.firstName}`,
      lastName: `${formValues.lastName}`,
      email: `${formValues.email}`,
      phone: `${formValues.phone}`,
    };
    // HTMl request to send form data to server
    axios
      .post("/contact", body)
      .then((res) => {
        // If successful, change button to success button
        setCurrentButton(conditionalButtons[2]);
      })
      // If unsuccessful, set error state to message to display error message
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
