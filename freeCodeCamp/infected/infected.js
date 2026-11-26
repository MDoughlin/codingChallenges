function infected(days) {
  let total = 1;

  for (let i = 1; i <= days; i++) {
    total *= 2;

    if (i % 3 === 0) {
      let patch = Math.ceil(total * 0.2);
      console.log(patch);
      total -= patch;
    }
  }
  return total;
}
/*
P - number
R - number
E - to the left

P

if day 0 return 1
if day 1 return 2
if day 3 return 6

have a total = 1

for loop and loop through number of days
im going to need to account for the previous number (total needs to be within the loop)
day 5




Day 0 1 2 3 4  5  6  7  8   9   10 11 12 13 14 15 16 17 18 19 20
    1 2 4 6 12 24 38 76 152 243
*/
