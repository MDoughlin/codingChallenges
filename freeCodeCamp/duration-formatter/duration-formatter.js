function format(seconds) {
  //seconds
  if (seconds < 10) {
    return `0:0${seconds}`;
    //seconds
  } else if (seconds < 60) {
    return `0:${seconds}`;
    //minutes
  } else if (seconds >= 60 && seconds < 3600) {
    let minute = Math.floor(seconds / 60);
    let remainder = minute * 60;
    let time = seconds - remainder;
    return `${minute}:${time}`;
  } else if (seconds > 3600) {
    let hour = Math.floor(seconds / 3600);
    let remainingSeconds = seconds - hour * 3600;
    let minute = Math.floor(remainingSeconds / 60);
    let remainingTime = minute * 60; //this is what time is minusing
    let time = remainingSeconds - remainingTime;
    return `${hour}:${minute <= 9 ? `0${minute}` : minute}:${time}`;
  }
}
