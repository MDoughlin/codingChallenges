function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9)
  return celsius
  
}
​
function weatherInfo (fahrenheit) {
  
let temp = convertToCelsius(fahrenheit)
  if (temp > 0) {
    return temp + " is above freezing temperature"
}  else {
    return temp + " is freezing temperature"
  }
}
​
​