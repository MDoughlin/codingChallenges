function alternateSqSum(arr){
  let result = []
  
  if (arr.length === 0) return 0
  
  for (let i = 0; i < arr.length; i++){
    if (i % 2 === 1){
      result.push(arr[i] * arr[i])
    } else {
      result.push(arr[i])
    }
  }
// console.log(result)
  return result.reduce((a, c) => a + c)
}