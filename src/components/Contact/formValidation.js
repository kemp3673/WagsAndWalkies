export const formValidation = (values) => {
    // Object to hold errors
    const errors = {};
    // Regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // Validate message
    if (!values.message) {
      // Error message if no message is entered
      errors.message = "A message is required"
    }
    // Validate name, Only one name is required
    if (!values.firstName && !values.lastName) {
      // If not name in either field, error message
      errors.name = "A name is required"
    }
    // Validate email
    if (!values.email) {
      // Error message is no email is entered
      errors.email = "An Email is required"
    } else if (!regex.test(values.email)) {
      // Error message if email is not in correct format
      errors.email = "Not a valid Email format"
    }
    // Phone input is optional, but if it is filled out, it must be 12 characters long. If entered an then deleted, it will be undefined.
    if (values.phone !== undefined && values.phone.length !== 0 && values.phone.length !== 12) {
      // Error message is phone in filled in and not 12 characters long
      errors.phone = "Not a valid phone number"
    }
    return errors;
  }

