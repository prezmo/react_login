// based on RFC 2822 spec email validation
const emailCheckRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

// look ahead for 3 groups to check for at least one num and one small/big letter + minimum 6 chars
const passwordValidationRegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,}$/;


function validateEmail(input) {
  if (!input) return false;
  return emailCheckRegExp.test(input);
}

function validatePassword(input) {
  if (!input) return false;
  return passwordValidationRegExp.test(input);
}

export {
  validateEmail,
  validatePassword
};
