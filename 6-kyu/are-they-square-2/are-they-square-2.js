var isSquare = function(arr){
  
  let numbers = arr.flat(Infinity)
  
  if (numbers.length === 0) return undefined
  
  for (let i = 0; i < numbers.length; i++){
    if (!(Math.sqrt(numbers[i]) % 1 === 0)){
      return false
    }
}
  return true
}
​
/*
​
flatten the array
loop through the array 
if element is not a square number return false 
​
return true
​
*/