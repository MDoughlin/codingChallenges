function batteryBars(percent) {
let result = []
​
let hashtag = Math.floor(percent / 20)
let battery = '#'.repeat(hashtag)
let dots = '.'.repeat(5 - hashtag)
​
​
return '[' + battery + dots + ']'
}
​
/*
P - number 
R - string 
E - to the left
P
​
empty array variable 
1 - 100 percent ... divide the percent by 20. .. round down this number (x)
x is the number of hashtags 
​
repeat x into the empty array
​
5 - x. and remaider will go as . into array
​
*/