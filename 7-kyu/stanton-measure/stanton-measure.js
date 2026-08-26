function stantonMeasure(a){
  let count = {}
  
for (num of a){
  count[num] = (count[num] || 0) + 1
}
  let value = count["1"]
  let secondValue = count[value] || 0
  
  return secondValue
}
​
/*
P - ARRAY 
R - number
E - to the left
P - 
- loop through the array
- count all the times 1 appears (x)
- return the number of times x appears 
*/