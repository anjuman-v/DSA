function zTraversal(N,arr){
    //write code here
   var bag="";
   for(var i=0;i<N;i++){
        bag+=arr[0][i]+" ";
    }
    
    for( i=1,j=N-2;i < N && j >= 0; i++,j--){
        bag += arr[i][j] + " ";
    }
    for (i = 1; i < N; i++){
        bag += arr[N - 1][i] + " ";
    }
    console.log(bag);
}
