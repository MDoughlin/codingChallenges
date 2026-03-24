function isKiss( words ){
  
  let sentence = words.split(" ")
  let longestWord = sentence.sort((a,b) => a.length - b.length)
  
  let lastWord = longestWord[longestWord.length - 1]
  
  
  if (sentence.length >= lastWord.length ){
    return "Good work Joe!"
  } else {
    return "Keep It Simple Stupid"
  }
}
​