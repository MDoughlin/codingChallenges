function hello(name) {
  if (!name){
    return "Hello, World!"
  } else {
    let firstName = name.split("")
    let capital = firstName[0].toUpperCase() + firstName.slice(1).join("").toLowerCase()
    return `Hello, ${capital}!`
    
  }
}