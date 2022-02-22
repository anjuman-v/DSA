function maximumOccuringElement(A,N){ // 1 1 2 3 3 2 2
    var obj = {};
    for(var i = 0; i < N; i++){
        if(obj[A[i] ]=== undefined){ 
          obj[A[i]]=  1;
        }
        else{
            obj[A[i]] = obj[A[i]] +1; 
        }
    }   
//console.log(obj);
var max = 0;
for(x in obj){
    if(obj[x] > max){
        max = obj[x];
        var name = x;
    }
}
console.log(name)

// var bag = "";
// for(var i=0;i<N;i++){
//     for(var j=0;j<A.length;j++){
//         if(A[i]==A[j])
//             bag += A[j]
//             break;
//         }
//         break;
//     }
//     console.log(bag)
}
