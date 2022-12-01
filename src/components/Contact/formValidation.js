import React from 'react';

export const formValidation = (values) => {
    console.log(values);
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.message) {
      errors.message = "A message is required"
    }
    if (!values.name) {
      errors.name = "A name is required"
    }
    if (!values.email) {
      errors.email = "An Email is required"
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid Email format"
    }
    return errors;
  }

