function canPost(message) {
  if (message.length < 40) {
    return "short post";
  } else if (message.length >= 40 && message.length <= 80) {
    return "long post";
  } else {
    return "invalid post";
  }
}

/*
P - string
R - string
E - to the left
P

if string is less than 40 return short post
else if between 40 and 80 return long pose
else invalid post
*/
