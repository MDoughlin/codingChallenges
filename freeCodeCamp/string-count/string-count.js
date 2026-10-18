function count(text, pattern) {
  let step = pattern.length;
  let total = 0;

  for (let i = 0; i <= text.length - step; i++) {
    let section = text.slice(i, i + pattern.length);

    if (section === pattern) {
      total++;
    }
  }
  return total;
}
