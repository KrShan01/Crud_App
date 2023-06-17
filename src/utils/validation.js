export const validateForm = (formData) => {
  // Initialize an empty object to store the validation errors
  const errors = {};

  // Validate the form data fields
  if (!formData.firstName) {
    errors.firstName = "First Name is required!";
  }

  if (!formData.lastName) {
    errors.lastName = "Last Name is required!";
  }

  if (!formData.phoneNumber) {
    errors.phoneNumber = "Phone Number is required!";
  }

  if (!formData.email) {
    errors.email = "Email is required!";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Invalid email address!";
  }

  if (!formData.gender) {
    errors.gender = "Gender is required!";
  }

  if (!formData.dob) {
    errors.dob = "Date of Birth is required!";
  }

  if (!formData.city) {
    errors.city = "City is required!";
  }

  if (!formData.state) {
    errors.state = "State is required!";
  }

  // Return the validation errors
  return errors;
};
