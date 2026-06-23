function maxTriSum(numbers){
  let orderList = new Set(numbers.sort((a, b) => b - a))
​
  let arrayList = [...orderList]
​
    let maxSum = arrayList[0] + arrayList[1] + arrayList[2]
    
  
    return maxSum
}
/*
P - array
R - number 
E - to the left
P - 
sort the array from largest to smallest
add together the first 3 digits
return the number 
​
*/