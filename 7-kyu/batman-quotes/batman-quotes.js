let getQuote = function(quotes, hero){
//   let quote = quotes.split("")
//   if (hero.split("").includes("0")){
//     return `Batman: ${quotes[0]}`
//   } else if (hero.split("").includes("1")){
//     return `Robin: ${quotes[1]}`
//     } else if (hero.split("").includes("2")){
//       return `Joker: ${quotes[2]}`
//     }
  
  let number = hero.match(/\d+/g)
   if (hero[0] === "R"){
     return `Robin: ${quotes[number]}`
   } else if (hero[0] === "B"){
     return `Batman: ${quotes[number]}`
   } else if (hero[0] === "J"){
     return `Joker: ${quotes[number]}`
   }
  }
​
/*
P - array and string
R  - string
E - to the left
P - 
split quotes by " " .. which will index them
​
hero ... i need to get the number in it as that corresponds with the array position
hero then needs to be spelled properly 
return correct "hero: quote"
​
*/