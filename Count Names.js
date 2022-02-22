function countNames(N,strings){
  strings.sort();
   var object = {};
for(var i =0; i<strings.length; i++){
        
     if(object[strings[i]]  === undefined){
            object[strings[i]] = 1;
         }
        else{
         object[strings[i]]++;   
            
        }
    }
      for( x in object){
      console.log(x + " " + object[x]);

}
}
