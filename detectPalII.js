function detectPalII(N, string){
    //write code here
var obj = {};
    for(var i = 0; i < N; i++){
        if(obj[string[i] ]=== undefined){ 
          obj[string[i]] =  1;
        }
        else{
            obj[string[i]] = obj[string[i]] +1; 
        }
    } 

var count = 0;
for(var x in obj){
   if(obj[x] % 2 == 1){
     count++;  
   } 
}
if (count === 1 ||count === 0  ){
    console.log("Possible!");
}
else{
console.log("Not Possible!");
}
}
