export const formValidation = (values) => {
    const errors = {};
    // Regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // Validate message
    if (!values.message) {
      errors.message = "A message is required"
    }
    // Validate name, Only one name is required
    if (!values.firstName && !values.lastName) {
      errors.name = "A name is required"
    }
    // Validate email
    if (!values.email) {
      errors.email = "An Email is required"
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid Email format"
    }
    // Phone input is optional, but if it is filled out, it must be 12 characters long. If entered and then deleted, it will be undefined.
    if (values.phone !== undefined && values.phone.length !== 0 && values.phone.length !== 12) {
      errors.phone = "Not a valid phone number"
    }
    return errors;
  }

