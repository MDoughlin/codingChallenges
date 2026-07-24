function allNonConsecutive (arr) {
  
let result = []
// let diff = arr[1] - arr[0]
 
for (let i = 1; i < arr.length; i++){
  if(arr[i] - arr[i - 1] !== 1){
    result.push({i: i, n:arr[i],})
  }
}
​
return result
  
 
}
/*
P - array
R - array
E 
P
empty array variable
loop through array starting at 1 
​
*/