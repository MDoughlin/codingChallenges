function checkStrength(password) {
  let length = password.length >= 8;
  let numbers = /[0-9]/.test(password);
  let specialCharacter = /[!@#$%^&*]/.test(password);
  let hasUpper = /[A-Z]/.test(password);
  let hasUpperAndLower = /[A-Z]/.test(password) && /[a-z]/.test(password);

  let conditions = [length, numbers, specialCharacter, hasUpperAndLower];

  let trueCount = conditions.filter((condition) => condition === true).length;

  if (trueCount === 4) {
    return "strong";
  } else if (trueCount === 2 || trueCount === 3) {
    return "medium";
  } else {
    return "weak";
  }
}

/*

P - string
R - string
E - to the left
P

- make password length variable
- make upper and lowercase variable
- make number variable (.includes)?
- regex


*/
