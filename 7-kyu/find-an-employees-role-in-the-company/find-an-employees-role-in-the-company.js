function findEmployeesRole(name) {
  
  let fullName = name.split(" ")
  
  for (let employee of employees){
    if (employee.firstName === fullName[0] && employee.lastName === fullName[1]){
      return employee.role
    } 
  }
return "Does not work here!"
}