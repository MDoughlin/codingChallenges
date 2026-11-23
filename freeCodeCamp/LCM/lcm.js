function lcm(a, b) {
  if (a % 2 === 1 && b % 2 === 1) return a * b;

  let first = [];
  let second = [];

  for (let i = 1; i <= a; i++) {
    first.push(a * i);
  }
  for (let i = 1; i <= b; i++) {
    second.push(b * i);
  }
  let set2 = new Set(second);
  let lowestCommonNumber = first.filter((num) => set2.has(num));

  return lowestCommonNumber[0];
}
