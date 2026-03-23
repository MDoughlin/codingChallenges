function solve(s){
    let word = s.split("")
    
    let lowerCase = 0
    let upperCase = 0
    
    for (let i = 0; i < word.length; i++){
      if (word[i] === word[i].toLowerCase()){
        lowerCase += 1
      } else {
        upperCase += 1
      }
    }
  
  if (lowerCase > upperCase){
    return word.join("").toLowerCase()
  } 
  if (upperCase > lowerCase){
    return word.join("").toUpperCase()
  }
  
  return word.join("").toLowerCase()
}