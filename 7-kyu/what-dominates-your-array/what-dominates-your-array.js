function dominator(arr) {
  
  let result = {}
  
  for (let a of arr ){
    if (result[a]){
      result[a] += 1
    } else {
      result[a] = 1
    }
  }
 
  let denominator = arr.length
  let maxKey = null
  let maxValue = -Infinity
  
  for (let key in result){
    if (result[key] > maxValue){
      maxValue = result[key]
      maxKey = key
    }
  }
  if ((maxValue / denominator ) > .50){
    return Number(maxKey) 
  } else {
    return -1
  }
​
}
/*
P - array
R - number 
E
P - 
​
​
- create a object variable 
loop through the array
if in the object add 1 else add in object
​
​
in the object 
get the biggest value and it has to be more than .50 
if none return - 1
​
​
*/