function scaleRecipe(ingredients, scale) {
  let result = [];
  for (let i = 0; i < ingredients.length; i++) {
    let element = ingredients[i].split(" ");

    result.push(element[0] * scale + " " + element.slice(1).join(" "));
  }
  return result;
}
