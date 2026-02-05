function betweenExtremes(numbers) {
    let sorted = numbers.sort((a,b) => a - b)
    
    let max = sorted[sorted.length - 1]
    let min = sorted[0]
    
    return max - min 
}