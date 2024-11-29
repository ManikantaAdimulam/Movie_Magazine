const validateEmail = (text: string): string | null => {
  if (text.trim().length <= 0) {
    return 'Email cannot be empty.';
  }
  const emailRegexp = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  );
  if (emailRegexp.test(text)) {
    return null;
  }
  return 'Email is not valid.';
};

const validatePassword = (text: string): string | null => {
  if (text.trim().length <= 0) {
    return 'Password cannot be empty.';
  }
  const passwordRegex = new RegExp(
    /^(?=.*[A-Z])(?=.*\W)(?=.*[a-zA-Z0-9]).{8,15}$/,
  );
  if (passwordRegex.test(text)) {
    return null;
  }
  return 'Password must contain Alpha Numeric with at least one Capital Letter and 1 Special Character and minimum of 8 characters.';
};

const Utils = {
  validateEmail,
  validatePassword,
};

export default Utils;
