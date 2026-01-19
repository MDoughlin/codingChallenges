function trouble(array, t){
​
  let i = 1
  while (i < array.length){
    if (array[i - 1] + array[i] === t){
      array.splice(i, 1)
    } else {
      i++
    }
  }
  return array
}