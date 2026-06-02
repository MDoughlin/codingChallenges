function maxProduct(numbers, size){
  let sorted = numbers.sort((a,b) => a - b)
  let maximumOf = sorted.slice(-size)
  
  return maximumOf.reduce((a,b) => a * b, 1)
}
​
/*
P - array and number
R - number
E - to the left 
P - 
​
sort the array from largest to smallest
slice array by numbers
return the numbers multiplied 
​
​
*/