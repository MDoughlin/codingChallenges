function pairs(ar){
​
  let result = []
  let count = 0
  
  for (let i = 0; i < ar.length; i+= 2){
    let chunkSize = 2
    
    result.push(ar.slice(i, i + chunkSize))
  }
  
  for (let i = 0; i < result.length; i++){
    if (result[i].length > 1){
      let difference = Math.abs(result[i].reduce((a,c) => a - c))
      if (difference === 1){
        count += 1
      }
    }
​
  }
  return count
};
​
/*
array variable
count variable
​
​
loop through array and chunk by 2 
if the chunked array length is 2 
then reduce 
if ===1 
add to count 
​
*/
​