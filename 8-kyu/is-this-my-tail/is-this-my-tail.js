function correctTail(body, tail){
  
  sub = body.substr(body.length-(tail.length))
  
  console.log(sub)
  
  if (sub === tail){
    return true
  }else{ 
    return false
}  
}