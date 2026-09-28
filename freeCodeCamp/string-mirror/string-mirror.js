function isMirror(str1, str2) {
  let stringOne = str1.split("");
  let stringTwo = str2.split("").reverse();

  console.log("stringOne", stringOne);
  console.log("stringTwo", stringTwo);

  for (let i = 0; i < stringTwo.length; i++) {
    if (stringTwo[i] !== stringOne[i]) {
      return false;
    } else {
      return true;
    }
  }
}
