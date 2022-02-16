function partyPlanning(N,PamID,M,JimID){
    //write code here
    var obj = {};
    for(var i = 0; i < N; i++){
        if(obj[PamID[i]] === undefined){ 
          obj[PamID[i]] =  1;
        }
        else{
            obj[PamID[i]]++; 
        }
    }   
    
var obj1 = {};
    for( var j = 0; j < M; j++){
        if(obj1[JimID[j]]=== undefined){ 
          obj1[JimID[j]] =  1;
        }
        else{
            obj1[JimID[j]]++; 
        }
    }   
 
 i = Object.keys(obj)
 j = Object.keys(obj1)
   if(i.toString() == j.toString()){
       console.log("Yes")
   }
   else{
       console.log("No")
    }

}
