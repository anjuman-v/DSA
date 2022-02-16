function countConsonants(s) {
    //write code here
    var c=0;
   var count = 0;
   for(var i=0;i<s.length;i++){
     if(s[i]=='a'||s[i] =='e'|| s[i] =='i'|| s[i] =='o'|| s[i] =='u'){
       c++
      } 
      else{
           count++;
      }
   }
  console.log(count)
  
  }
  