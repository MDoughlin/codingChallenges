class GroupByDifference {
  constructor(numbers) {
    this.numbers = numbers;
  }
​
  find(difference) {
    let sorted = this.numbers.sort((a, b) => a - b);
    let result = [];
​
    for (let i = 0; i < sorted.length; i++) {
      let hasMatch = false;
​
      for (let j = 0; j < sorted.length; j++) {
        if (i !== j && Math.abs(sorted[i] - sorted[j]) <= difference) {
          hasMatch = true;
          break;
        }
      }
​
      if (hasMatch) {
        result.push(sorted[i]);
      }
    }
​
    return result;
  }
}
​
​
/*
​
P - array
R - array
E - to the left
P - 
sort the array of numbers from least to greatest 
loop through the array starting at 0 
if 1 - 0 is >= 0 and 1 - 0 <= difference
add to 
*/