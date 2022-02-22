function dayOfTheWeek(day, N) {
  //write code here
  var n=N%7;
  var bag = 0;
  var days =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  var l = days.length
  for(var i=0;i<l;i++){
    if(day == days[i]){
     bag += i+n;   
    } 
  }
  console.log(days[bag%7])
}
