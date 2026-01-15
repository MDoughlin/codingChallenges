function isSortedAndHow(array) {
  
    let isAscending = true
    let isDescending = true
    
    for (let i = 1; i < array.length; i++){
      if (array[i] > array[i - 1]){
        isDescending = false
      } else if (array[i] < array[i - 1]){
        isAscending = false
      }
    }
  if (isAscending){
    return "yes, ascending"
  } else if (isDescending){
    return "yes, descending"
  } else {
    return "no"
  }
}