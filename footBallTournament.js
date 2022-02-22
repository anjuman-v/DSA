function footBallTournament(n, teamNamesArr) {
  //write code here
  var obj = {};
    for(var i = 0; i < n; i++){
        if(obj[teamNamesArr[i]]===undefined){ 
          obj[teamNamesArr[i]]=  1;
        }
        else{
            obj[teamNamesArr[i]]++; 
        }
    }   
  
  //console.log(obj)
  var max = 0;
for(var x in obj){
    if(obj[x] > max){
        max = obj[x];
        var winteam = x;
    }
}
console.log(winteam)
}
