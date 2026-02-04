function maxDiff(list) {
  let sorted = list.sort((a,b) => a - b)
  let max = sorted[sorted.length - 1]
  let min = sorted[0]
    
  if (sorted.length === 0) return 0
  return max - (min)
  };