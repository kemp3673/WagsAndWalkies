import React, { useState } from "react";
import { SendButton, SuccessButton, SendingButton, SendingImg, ContactError} from './contactElements';
import SendingDots from '../../images/icons/ellipse-dots.gif';
import {BsCheckLg} from 'react-icons/bs';


const ContactButton = ({formFilled, formValues}) => {
  const [sent, setSent] = useState(false);
  const [mailError, setMailError] = useState(false);

  const sendMessage = (formFilled, formValues) => {

  }


  return (
    <>
    <SendButton>Send</SendButton>
    <SendingButton>Sending <SendingImg src={SendingDots}/></SendingButton>
    <SuccessButton>Sent<BsCheckLg style={{transform:'translateY(4px)', marginLeft:'8px',}}/></SuccessButton>
    <ContactError>There was a problem sending your message</ContactError>
    </>

  )
}

export default ContactButton;