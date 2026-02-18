function howMuchCoffee(events) {
/*
P - array
R - nunber or string
E
P
​
sum = 0
- loop through array
  - if cw is lowercase or cat is lowercase or dog is lowercase add 1 to sum
  - if cw is uppercase or cat is uppercase or dog is uppercase add 2 to sum
  - if element is something else add 0
  
  if the sum is over 3 return "You need extra sleep" else return the sum number
​
​
*/
let sum = 0
for (let i = 0; i < events.length; i++){
  if (events[i] === 'cw' || events[i] === 'dog' || events[i] === 'cat' || events[i].includes("movie")){
    sum += 1
  } else if (events[i] === "CW" || events[i] === "DOG" || events[i] === "CAT" || events[i].includes("MOVIE")){
    sum += 2
  } else {
    sum += 0
  }
  
}
if (sum > 3){
  return "You need extra sleep"
} else {
return sum
  }
}
​