function adjustThermostat(currentF, targetC) {
  let convert = targetC * 1.8 + 32;

  if (convert === currentF) {
    return "Hold";
  }

  if (convert > currentF) {
    let total = (convert - currentF).toFixed(1);
    return `Heat: ${total} degrees Fahrenheit`;
  }

  if (convert < currentF) {
    let total = (currentF - convert).toFixed(1);
    return `Cool: ${total} degrees Fahrenheit`;
  }
}
