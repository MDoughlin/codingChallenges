function tripleTrouble(one, two, three){
/* 
P - stringd
R - string
E below and to the left 
P 
​
- a empty result string
- concat the strings together 
- split string into an array
​
- return empty result string
*/
  
  let result = ""
  for (let i = 0; i < one.length; i++){
    result += one[i] + two[i] + three[i]
  }
return result
​
 }