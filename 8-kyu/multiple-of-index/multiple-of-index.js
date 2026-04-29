function multipleOfIndex(array) {
  
let result = []
​
for (let i = 0; i < array.length; i++){
  if (( i === 0 && array[i] === 0) || (i !==0 && array[i] % i === 0)){
    result.push(array[i])
  }
}
​
return result
}
/*
P - array
R - array 
E - to left
P - 
make an empty array variable
loop through the array at index 1 with for looo
 if element divided by index push to array
*/