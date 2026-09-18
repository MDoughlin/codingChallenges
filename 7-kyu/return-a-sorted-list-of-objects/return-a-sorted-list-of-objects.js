function sortList(sortBy, list) {
    let duplicateList = [...list]
    
    duplicateList.sort((x,y) => y[sortBy] - x[sortBy])
     return duplicateList
}
​
/*
P - array of objects
R - ordered array of objects 
E - to the left 
P
- duplicate
--> I need to get the order the pairs by value in descending order (b-a) <--  
​
*/