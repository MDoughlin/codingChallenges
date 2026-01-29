function countWords(str) {
  let result = 0
  
let string = str.trim().split(/\s+/)
​
​
if (string.length === 0){
  return 0
}
  
  for (let i = 0; i < string.length; i++){
    if (string[i]){
      result += 1
    }
  }
​
  
  return result
​
}