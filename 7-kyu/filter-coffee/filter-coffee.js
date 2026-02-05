function search(budget, prices) {
​
let result = []
​
for (let i = 0; i < prices.length;  i++){
  if (budget >= prices[i]){
    result.push(prices[i])
  }
}
​
return result.sort((a,b) => a - b).join(",")
​
}