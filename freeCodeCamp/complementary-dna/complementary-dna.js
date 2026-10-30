function complementaryDNA(strand) {
  let result = "";

  for (let s of strand) {
    if (s === "A") {
      result += "T";
    } else if (s === "T") {
      result += "A";
    } else if (s === "C") {
      result += "G";
    } else if (s === "G") {
      result += "C";
    }
  }
  return result;
}

/*
P - string
R - string
E - to the left
P

empty string
loop through the string (for of )
if a . t ,
if t. a,
if g. c
if c g

return string

*/
