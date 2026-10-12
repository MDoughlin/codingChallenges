function generateRange(min, max, step){
​
  let result = [min]
  
  for (let  i = min; i < max; i += step){
    if (i + step <= max){
      result.push(i + step)
    }
  }
  return result
}
​
/*
P - 3 numbers
R - array of numbers
E - to the left 
P 
 create empty array variable
 
 for loop. 
 starting at min
 increasing by step
 max should be last number 
 
​
*/