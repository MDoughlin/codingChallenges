function twoSum(numbers, target) {
  
//   let result = [];
   
  for (let i = 0; i < numbers.length; i++){
    for (let j = i + 1 ; j < numbers.length; j++){
      if (numbers[i] + numbers[j] === target){
      return [i, j]
      }
    }
  }
  
  
  
//   for (let i = 0; i < numbers.length; i++){
//     if (numbers[0] + numbers[i] === target){
//       result.push(numbers.indexOf(numbers[0]), numbers.indexOf(numbers[i]))
      
//     }
//     console.log(result)
//   }
  
  
}
// console.log(twoSum([3, 2, 4], 6) )
/*
P - array and target number
R - array
E - to the left
P
​
loop through array
start at index 0 
add number@index plus number@index + 1 
if === target number
​
​
*/