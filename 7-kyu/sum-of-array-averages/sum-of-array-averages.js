function sumAverage(arrays) {
  
  let sums =  []
​
  for (let i = 0; i < arrays.length; i++){
    sums.push(arrays[i].reduce((a,c) => a + c) / arrays[i].length)
  }
  return sums.reduce((a,c) => a+ c )
}
/*
P - array
R - number
E - to the left
P - 
emoty array value
split the arrays at the comma 
for each value get the average and push that to the empty variable 
add values together 
return total number 
*/