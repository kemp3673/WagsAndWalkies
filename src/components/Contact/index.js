import React, { useEffect, useState } from "react";
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
  ContactRadio,
} from "./contactElements";

const Contact = () => {
  // Declaration of state values
  const formDefault = {
    message: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    contact: "New Client Inquiry",
  };
  const [formValues, setFormValues] = useState(formDefault);
  const [formErrors, setFormErrors] = useState([]);
  const [isChecked, setIsChecked] = useState(true);

  //Updates textArea Height to allow for vertical scaling of text area
  useEffect(() => {
    const textField = document.getElementById("message");
    if (formValues.message.length > 1) {
      textField.style.cssText = `height: ${textField.scrollHeight}px;`;
    } else {
      textField.style.cssText = `height: 50px;`;
    }
  }, [formValues.message]);

  // Updates form values from inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Toggle between contact and review radio options
  const handleRadioToggle = () => {
    setIsChecked(isChecked => !isChecked);
    let current = formValues.contact === "New Client Inquiry" ? "Review" : "New Client Inquiry";
    setFormValues({ ...formValues, contact: current });
  }

  return (
    <>
      <ContactContainer id="contact">
        <ContactContent>
          <ContactWrapper>
            <ContactHeader>
              <ContactTitle>Ready to take the next step?</ContactTitle>
            </ContactHeader>
          </ContactWrapper>
          <ContactWrapper>
            <ContactForm>
              <div style={{textAlign: "center"}}>
              <ContactLabel>Contact</ContactLabel>
              {/* TODO create styled input option for radio button */}
              <ContactRadio
                id="contact option"
                type="radio"
                aria-label="contact option"
                checked={isChecked}
                onClick={() => handleRadioToggle()}
              />
              <ContactLabel>Review</ContactLabel>
              <ContactRadio
                id="review option"
                type="radio"
                aria-label="review option"
                checked={!isChecked}
                onClick={() => handleRadioToggle()}
              />
              </div>
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
              <ContactLabel>Last Name <span style={{fontSize: "12px"}}>(Optional)</span></ContactLabel>
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
              <ContactLabel>Phone <span style={{fontSize: "12px"}}>(Optional)</span></ContactLabel>
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
              {formErrors.phone ? <ContactError>{formErrors.phone}</ContactError> : null}
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
