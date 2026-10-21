function sockPairs(pairs, cycles) {
  let total = pairs * 2;

  if (pairs === 1 && cycles >= 2) return 0;

  for (let i = 1; i <= cycles; i++) {
    if (i % 10 === 0) {
      total += 2;
    }

    if (i % 5 === 0) {
      total -= 1;
    }

    if (i % 3 === 0) {
      total += 1;
    }

    if (i % 2 === 0) {
      total -= 1;
    }
  }
  return Math.floor(total / 2);
}
