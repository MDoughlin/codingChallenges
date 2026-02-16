function crap(garden, bags, cap){
/*↔*/
  let oneGarden = garden.flat()
  let sum = 0
  
  for (let i = 0; i <= oneGarden.length; i++){
    if (oneGarden[i] === "@"){
      sum += 1
    }  
    if (oneGarden.includes("D")){
      return "Dog!!"
    }
  }
  
  if (sum <= bags * cap){
    return "Clean"
  } else {
    return "Cr@p"
  }
}