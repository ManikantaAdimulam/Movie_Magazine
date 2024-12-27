const validateEmail = (text: string): string | null => {
  if (text.trim().length <= 0) {
    return 'empty_email';
  }
  if (text.length >= 2) {
    const emailRegexp = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    );
    if (emailRegexp.test(text)) {
      return null;
    }
    return 'invalid_email';
  }
  return '';
};

const validatePassword = (text: string): string | null => {
  if (text.trim().length <= 0) {
    return 'empty_password';
  }
  if (text.length >= 2) {
    const passwordRegex = new RegExp(
      /^(?=.*[A-Z])(?=.*\W)(?=.*[a-zA-Z0-9]).{8,15}$/,
    );
    if (passwordRegex.test(text)) {
      return null;
    }
    return 'invalid_password';
  }
  return '';
};

const Utils = {
  validateEmail,
  validatePassword,
};

export default Utils;
