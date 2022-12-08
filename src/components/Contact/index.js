import React, { useEffect, useState } from "react";
import Aos from "aos";
import PhoneInput from "react-phone-number-input/input";
import ContactButton from "./contactButton";
import "aos/dist/aos.css";
import "./phone.css";
import {
  ContactContainer,
  ContactContent,
  ContactWrapper,
  ContactHeader,
  ContactTitle,
  ContactForm,
  ContactLabel,
  ContactInput,
  ContactMessage,
  ContactChars,
  ContactError,
} from "./contactElements";

const Contact = () => {
  // Initialize Aos to listen and provide global animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // Declaration of state values
  const formDefault = {
    message: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  const [formValues, setFormValues] = useState(formDefault);
  const [formErrors, setFormErrors] = useState([]);

  //Updates textArea Height to allow for vertical scaling of text area
  useEffect(() => {
    const textField = document.getElementById("message");
    if (formValues.message.length > 1) {
      textField.style.cssText = `height: ${textField.scrollHeight}px;`;
    } else {
      textField.style.cssText = `height: 50px;`;
    }
  }, [formValues.message])

  // Updates form values from inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <ContactContainer>
        <ContactContent>
          <ContactWrapper>
            <ContactHeader>
              <ContactTitle>Ready to take the next step?</ContactTitle>
            </ContactHeader>
          </ContactWrapper>
          <ContactWrapper>
            <ContactForm>
              <ContactLabel>First Name</ContactLabel>
              <ContactInput
                type="text"
                id="firstName"
                name="firstName"
                value={formValues.firstName}
                placeholder="John"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {formErrors.name ? <ContactError>{formErrors.name}</ContactError> : null}
              <ContactLabel>Last Name</ContactLabel>
              <ContactInput
                type="text"
                id="lastName"
                name="lastName"
                value={formValues.lastName}
                placeholder="Smith"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <ContactLabel>Email</ContactLabel>
              <ContactInput
                type="text"
                id="email"
                name="email"
                value={formValues.email}
                placeholder="johnsmith@gmail.com"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {formErrors.email ? <ContactError>{formErrors.email}</ContactError> : null}
              <ContactLabel>Phone</ContactLabel>
              <PhoneInput
                className="phone"
                country="US"
                id="phone"
                name="phone"
                value={formValues.phone}
                placeholder="(831) 123-4567"
                maxLength="14"
                onChange={(value) =>
                  setFormValues({ ...formValues, phone: value })
                }
              />
              <ContactLabel>Message</ContactLabel>
              <ContactMessage
                id="message"
                name="message"
                maxLength="500"
                value={formValues.message}
                placeholder="Hello! I am interested in your walking service."
                style={{height: "auto"}}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {formErrors.message ? <ContactError>{formErrors.message}</ContactError> : null}
              <ContactChars>Characters Remaining: {500 - formValues.message.length}/500</ContactChars>
            </ContactForm>
          </ContactWrapper>
          <ContactWrapper>
            <ContactButton formValues={formValues} setFormErrors={setFormErrors}/>
          </ContactWrapper>
        </ContactContent>
      </ContactContainer>
    </>
  );
};

export default Contact;
