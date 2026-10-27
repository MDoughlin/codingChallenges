function rainAmount(mm){
    if (mm >= 40) {
         return "Your plant has had more than enough water for today!"
    } else{
      let difference = 40 - mm
         return "You need to give your plant " + difference + "mm of water"
    };
}
​
​