function matrixPrimeCheck(N, M, arr) {
  //write code here
   var count = 0;
   var count1 = 0
  for(var i=0;i<N;i++){
     for(var j=0;j<M;j++){
         
        var n = arr[i][j]
         var prim = prime(n);
         //for(var k=2;k<=n;k++){
            if(prim === 1){
              count++
              //break;
            } 
         }
   }
   console.log(count)
}

function prime(n){
            var count = 0;
            var data = 0;
            for(var i=1;i<=n;i++){
                if(n%i===0){
                   count++ ;
                }
            }
            if(count == 2){
             data += 1   
            }
            return data;
}