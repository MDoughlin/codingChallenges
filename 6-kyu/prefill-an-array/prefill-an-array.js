function prefill(n, v) {
  if (
    (typeof n !== "number" && typeof n !== "string") ||
    isNaN(n) ||
    !Number.isInteger(Number(n)) ||
    Number(n) < 0
  ) {
    throw new TypeError(`${n} is invalid`);
  }
​
  let result = [];
​
  for (let i = 0; i < Number(n); i++) {
    result.push(v);
  }
​
  return result;
}
/*
P - number and number/string
R - array
E - to the left
P
​
- if no n return empty array
- if v is empty return [undefined]
- if n is not a number or number string throw TypeError
​
empty array variable
empty array varaible push n.repeat(v)
​
​
*/