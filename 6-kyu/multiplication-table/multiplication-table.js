function multiplicationTable(size) {
  
let result = []
​
for (let row = 1; row <= size; row++){
  let currentRow = []
  
  for (let col = 1; col <= size; col++){
    currentRow.push(row * col)
  }
 result.push(currentRow)
 
}
return result
}
​
/*
P - number
R - nested array / array
E - to the left
P 
​
- create a number variable an array with 1 in it
(the numbers )
- return array variable
*/
​