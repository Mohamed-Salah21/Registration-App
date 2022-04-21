const validateRegistrationValues = (values) => {
  const regex = {
    arabicLetters: /[\u0600-\u06FF\u0750-\u077F]/,
    hasDuplicates: /^([a-z])\1+$/,
    validEmail: /\S+@\S+\.\S+/,
    hasNumbers: /\d/,
  };
  const errors = {};
  // fullname errors
  if (!values.fullname) errors.fullname = "Required";
  else if (regex.arabicLetters.test(values.fullname))
    errors.fullname = "Fullname must be english letters";
  else if (regex.hasNumbers.test(values.fullname))
    errors.fullname = "Fullname musn't have any numbers";
  else if (values.fullname.length < 4) errors.fullname = "Fullname is short";
  else if (regex.hasDuplicates.test(values.fullname))
    errors.fullname = "Fullname has unkown";
  // email errors
  if (!values.email) errors.email = "Required";
  else if (!regex.validEmail.test(values.email))
    errors.email = "Email is invalid";
  // password errors
  if (!values.password) errors.password = "Required";
  else if (values.password.length <= 5)
    errors.password = "Password must be longer than 5  characters";
  else if (regex.hasDuplicates.test(values.password))
    errors.password = "Password musn't be easy";
  // confirm password errors
  if (!values.confirmPassword) errors.confirmPassword = "Required";
  else if (values.password !== values.confirmPassword)
    errors.confirmPassword = "Passwords are not identical";
  return errors;
};

export default validateRegistrationValues;
