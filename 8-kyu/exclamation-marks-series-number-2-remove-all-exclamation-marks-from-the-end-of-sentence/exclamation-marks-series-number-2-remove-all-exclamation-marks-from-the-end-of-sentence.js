function remove(string) {  
  // input: string
  // output: string
  
  while (string.endsWith('!')){
    string = string.slice(0, -1)
  }
  return string
}