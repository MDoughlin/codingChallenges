function countCharacters(sentence) {
  let lower = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let letters = lower.split("");

  let object = {};

  for (let i = 0; i < letters.length; i++) {
    if (object[letters[i]]) {
      object[letters[i]] += 1;
    } else {
      object[letters[i]] = 1;
    }
  }

  return Object.entries(object)
    .map((pair) => pair.join(" "))
    .sort();
}
