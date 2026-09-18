function capitalize(paragraph) {
  let word = paragraph.split("");

  let firstLetter = paragraph[0].toUpperCase();
  let result = firstLetter;

  for (let i = 1; i < word.length; i++) {
    let previousIndex = i - 1;

    // Move backwards past spaces
    while (word[previousIndex] === " ") {
      previousIndex--;
    }

    if (
      word[previousIndex] === "." ||
      word[previousIndex] === "!" ||
      word[previousIndex] === "?"
    ) {
      result += word[i].toUpperCase();
    } else {
      result += word[i];
    }
  }

  return result;
}

/*
P - STRING
R - STRING
E - TO THE LEFT
P -

result variable (empty string)
first letter should be cap.
loop through string
find the punctuation space combo then capitibilize letter

*/
