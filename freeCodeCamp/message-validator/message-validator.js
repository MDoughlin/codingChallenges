function isValidMessage(message, validator) {
  message = message.toLowerCase();
  validator = validator.toLowerCase();

  let word = message.split(" ");

  let firstLetter = word.map((w) => w[0]).join("");

  if (firstLetter !== validator) {
    return false;
  } else {
    return true;
  }
}

/*
P - string
R - boolean
E - to the left
P -
lowercase message
lowercase validator

Split the message so each word is its own element
map through and take the array and get the 0 index ...

turn array to string with .join
compare to the 2 strings ..

if they are not the same return false and if they are true

*/
