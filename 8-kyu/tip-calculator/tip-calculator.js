function calculateTip(amount, rating) {
  
  let tipRating = rating.toLowerCase()
  
  if (tipRating === "terrible"){
    return amount * 0
  } else if (tipRating === "poor" ){
    return Math.ceil(amount * 0.05)
  } else if (tipRating === "good"){
    return Math.ceil(amount * 0.10)
  } else if (tipRating === "great"){
    return Math.ceil(amount * 0.15)
  } else if (tipRating === "excellent"){
    return Math.ceil(amount * 0.20)
  } else {
    return "Rating not recognised"
  }
​
}