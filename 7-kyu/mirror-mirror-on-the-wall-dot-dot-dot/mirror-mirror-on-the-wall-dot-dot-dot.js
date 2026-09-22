function mirror(data) {
  /* go ahead */
  
  if (data.length === 0) return []
  if (data.length === 1) return data
  
  let listOne = [...data].sort((a,b) => a - b).slice(0, -1)
  let listTwo = [...data].sort((a,b) => b - a)
//   console.log(listOne)
  
return listOne.concat(listTwo)
}
​
/*
P - array
R - array 
E - to the left 
P
- create a spread operator
- order the list from least to greatest 
- duplicate spread list and order it from greatest to least 
- remove the first element of second list
- concat together 
​
​
*/