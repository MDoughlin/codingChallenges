function buildString(...template){
  let join = template.join(", ")
​
  return `I like ${join}!`;
}