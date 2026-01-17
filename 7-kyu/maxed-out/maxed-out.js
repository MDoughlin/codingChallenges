function maxedOut(arr) {
​
  let cubed = arr.map(arr => arr ** 3)
  let sum = cubed.reduce((a,c) => a + c, 0)
  let max = Math.max(...cubed)
  
  if (sum <= Number.MAX_SAFE_INTEGER){
    return sum
  } else {
    return "You've pushed me to the max!" 
  }
}