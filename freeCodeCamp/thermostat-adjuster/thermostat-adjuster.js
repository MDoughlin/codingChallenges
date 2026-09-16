function adjustThermostat(temp, target) {
  if (temp < target) {
    return "heat";
  } else if (temp > target) {
    return "cool";
  } else {
    return "hold";
  }

  // return temp;
}

/*
P - numbers
R - string
E - to the left
P -
if current temo is less than target return hear
if current is more than targer return cool
if currrent and target equal return hold


*/
