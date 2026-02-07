function nthSmallest(arr, pos){
  let sortedArray = arr.sort((a,b) => a - b)
  return sortedArray[pos - 1]
}