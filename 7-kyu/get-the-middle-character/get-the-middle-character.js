function getMiddle(s) {
  //Code goes here!
  /* 
  P - string 
R - string
E
P
find out if string length is even or odd
  if string length is even (return 2 middle characters)
  middle char = divide string by 2
  return middle char + next character 
  
  if string length is odd (return middle character)
  middle char = divide string by 2 .. round this number up
  return string at middle char 
  */
  
  if (s.length % 2 === 0){
    let middleChar = Math.floor(s.length /2)
    return s[middleChar - 1] + s[middleChar]
  }
  
  if (s.length % 2 !== 0){
    let middleChar = Math.floor(s.length / 2)
    return s[middleChar]
  }
}