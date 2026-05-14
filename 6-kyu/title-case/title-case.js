function titleCase(title, minorWords) {
    let words = title.toLowerCase().split(" ")
    
    let ignore;
  
    if (!minorWords){
      ignore = []
    } else {
      ignore = minorWords.toLowerCase().split(" ")
    }
  
    
    
    let firstWord = words[0]
    
    let result 
    
    if (firstWord.length > 1){
       result = firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase()
    } else {
       result = firstWord.toUpperCase()
    }
  
​
    
  for (let i = 1; i < words.length; i++){
    if (ignore.includes(words[i])){
      result += " " + words[i].toLowerCase()
    } else 
      result += " " + words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    }
    return result
    
  }
​
​
​
console.log(titleCase('a clash of KINGS', 'a an the of') )
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In') )
/*
P - string
R - string
E - 'a clash of KINGS', 'a an the of' // should return: 'A Clash of Kings'
P 
- have an empty string
split the string at empty spaces 
first word letter is always capitialized 
loop through the array starting at 1 index
- if index is equal to minor words make it all lower case and push to empty string 
else
- capitalize first letter and lower case the rest of the letters 
​