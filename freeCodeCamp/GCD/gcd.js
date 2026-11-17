function gcd(x, y) {
  let divisorX = [];
  let divisorY = [];

  for (let i = x; i > 0; i--) {
    if (x % i === 0) {
      divisorX.push(i);
    }
  }

  for (let i = y; i > 0; i--) {
    if (y % i === 0) {
      divisorY.push(i);
    }
  }

  let set2 = new Set(divisorY);
  let commonNumbers = divisorX.filter((num) => set2.has(num));
  console.log(commonNumbers);

  return commonNumbers[0];
}

/*
P - 2 numbers
R - 1 number
E - to the left
P
2 empty arrays and push whats divisible and leaves 0


*/
