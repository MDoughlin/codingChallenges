function squareOrSquareRoot(array) {
  
  
  
  let result = []
  
  for (let i = 0; i < array.length; i++){
    if (!(Math.sqrt(array[i]) % 1 === 0 )){
      result.push(array[i] * array[i])
    } else {
      result.push(Math.sqrt(array[i]))
    }
  }
  
  
  return result
    
}
/*
P - array
R - array
E - to the left
P
- empty array variable
loop through array
- if index is not a square root, 
  push index * index
else 
push square root of index 
*/