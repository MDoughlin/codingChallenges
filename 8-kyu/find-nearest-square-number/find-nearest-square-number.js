function nearestSq(n){
  
  let squareRoot = Math.sqrt(n)
  
    if (Number.isInteger(squareRoot)){
      return n 
    } else if (squareRoot % 1 >= 0.5) {
       let roundedUp = Math.ceil(squareRoot)
      return roundedUp ** 2
    } else {
      let roundedDown = Math.floor(squareRoot)
      return roundedDown ** 2
}
    }
/*
P - number
R - number
E 
P
​
if square root return n
if square root .5 over round up and multiply 
if under round down and multiply 
*/