export const formValidation = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.message) {
      errors.message = "A message is required"
    }
    if (!values.firstName && !values.lastName) {
      errors.name = "A name is required"
    }
    if (!values.email) {
      errors.email = "An Email is required"
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid Email format"
    }
    if (values.phone.length !== 12 && values.phone.length !== 0) {
      errors.phone = "Not a valid phone number"
    }
    return errors;
  }

