function getDrinkByProfession(param){
let input = param.toLowerCase()
​
switch (input){
    case "jabroni":
    return "Patron Tequila"
    case "school counselor":
    return "Anything with Alcohol"
    case "programmer":
    return "Hipster Craft Beer"
    case "bike gang member":
    return "Moonshine"
    case "politician":
    return "Your tax dollars"
    case "rapper":
    return "Cristal"
    default:
    return "Beer"
}
// if (input === "jabroni"){
//   return "Patron Tequila"
// } else if (input === "school counselor"){
//   return "Anything with Alcohol"
// } else if (input === "programmer"){
//   return "Hipster Craft Beer"
// } else if (input === "bike gang member"){
//   return "Moonshine"
// } else if (input === "politician"){
//   return "Your tax dollars"
// } else if (input === "rapper"){
//   return "Cristal"
// } else {
//   return "Beer"
// }
}