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
  const [canSend, setCanSend] = useState(null);
  const [handleSubmit, setHandleSubmit] = useState(false);

  const [mailError, setMailError] = useState(false);

  //TODO Create function that when SENT is clicked, empties form values and reset states and button

  const handleSend = useCallback(() => {
    let errors = validator(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setCanSend(true);
    }
  }, [formValues, setFormErrors]);

  useEffect(() => {
    if (handleSubmit) {
      setTimeout(() => {
        setHandleSubmit(false);
      }, 5000)
      handleSend();
    }
  }, [handleSubmit, handleSend])

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

  const [currentButton, setCurrentButton] = useState(conditionalButtons[0]);

  const sendMessage = () => {
    let body = {
      "message": `${formValues.message}`,
      "firstName": `${formValues.firstName}`,
      "lastName": `${formValues.lastName}`,
      "email": `${formValues.email}`,
      "phone": `${formValues.phone}`,
    }
    axios
        .post("/contact", body)
        .then((res) => {
          setCurrentButton(conditionalButtons[2]);
          // setTimeout(() => {
          //   setCurrentButton(conditionalButtons[0]);
          // }, 5000)
        })
        .catch(err => console.log(err.message));
  }

  useEffect(() => {
    if (canSend === true) {
      setCurrentButton(conditionalButtons[1])
      sendMessage(formValues);
    }
  }, [canSend]);


  return (
    <>
      {currentButton}
      {mailError ? (
        <ContactError>There was a problem sending your message</ContactError>
      ) : null}
    </>
  );
};

export default ContactButton;
