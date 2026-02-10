function diff(a, b){
​
  let array1 = a.filter(item => !b.includes(item));
  
  let array2 = b.filter(element => !a.includes(element))
  
  return [...new Set([...array1, ...array2])].sort((a, b) => a.localeCompare(b));
}