function evenLast(numbers) {
  let last = numbers.at(- 1)
  
  if (numbers.length === 0) return 0
  
  let count = 0
  for (let i = 0; i < numbers.length; i+= 2){
    
     count += numbers[i]
  
  }
 return count * last 
}
​
​
/*
P - array
R - number 
E - 
P
if array empty return 0
​
make a variable for the last index
let count 0 
​
loop through the array 
if the index is even add the number at the index
multiply count by last index 
​
​
*/