function masaiTraversalAndQueries(N, M, q, arr){
    //write code here
    var bag = "";
    var bag1 = "";
    if(q === 1){
        for(var i = 0; i < N; i++){
        if(i % 2 === 0){
            for(var j = 0; j < M; j++)
                bag1 += arr[i][j] + " ";
            }
            else{
                for(j=M-1;j>=0;j--)
                    bag1 += arr[i][j] + " ";
             }
            }
        console.log(bag1);
    }
    
    else if(q === 2){
         for(i=0;i<N;i++){
            if(i % 2 == 0){
               for(j=M-1;j>=0;j--)
                    bag1 += arr[i][j] + " ";
                  }
            else{
                for(j=0;j<M;j++)
                    bag1 += arr[i][j] + " ";
            }
        }
        console.log(bag1);
    }
  
}

