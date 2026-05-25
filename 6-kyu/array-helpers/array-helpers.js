Array.prototype.square = function() {
​
    return this.map(x => x * x )
}  
Array.prototype.cube = function(){
    return this.map (x => x ** 3)
  }
Array.prototype.average = function(){
  
    let total = this.reduce((a, c) => a + c, 0)
    return total / this.length
}
Array.prototype.sum = function(){
    return this.reduce((a,c) => a + c, 0)
    
  }
Array.prototype.even = function(){
  
   return this.filter(x => x % 2 === 0)
    
}
Array.prototype.odd = function(){
    return this.filter(x => x % 2 === 1)
  }
​