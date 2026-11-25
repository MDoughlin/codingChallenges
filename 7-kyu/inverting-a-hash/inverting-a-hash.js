function invertHash(hash) {
  
  let keys = Object.keys(hash)
  let values = Object.values(hash)
  
  let reversed = {}
  
  for (let i = 0; i < keys.length; i++){
    reversed[values[i]] = keys[i]
  }
  return reversed
}
​
​
/*
P - object
R - object
E - to the left
P - 
get all the keys
get all the values 
​
for loop and switch values
​
​
*/