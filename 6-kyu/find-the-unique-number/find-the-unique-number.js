function findUnique(numbers) {
    // Return the unique number
  
  let result = {}
  for (let number of numbers){
    if (result[number]){
     result[number] ++
    } else {
      result[number] = 1
    }
  }
  
return Number(Object.keys(result).find(key => result[key] === 1))
  
}
/*
P - array
R - number
E - right 
P
​
*/
​