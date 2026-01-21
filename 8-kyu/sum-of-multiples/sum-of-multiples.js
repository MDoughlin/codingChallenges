function sumMul(n,m){
  
if (m <= 0 || n <= 0){
  return "INVALID"
}
  
  let nums = []
  for (let i = 0; i < m; i += n){
    nums.push(i)
  }
  return nums.reduce((a,c) => a + c, 0)
}