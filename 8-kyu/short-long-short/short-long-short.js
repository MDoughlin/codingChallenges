function solution(a, b){
  let stringA = a.length
  let stringB = b.length
  
  if (stringA > stringB){
    return b + a + b
  } else {
    return a + b + a
  }
}
/*
P - two strings; numbers
R - string of numbers  
E- to the left
P - 
get the length of both strings
if stringa is shorter concat a b a else b a b 
*/