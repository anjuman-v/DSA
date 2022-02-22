function rotateBy90Clockwise(N, matrix){
    //write code here
 var temp = N-1;
    var ans = [] ;// result array
     for (var i=0;i<N;i++){
         for (var j=0;j<N;j++){
             ans[temp][i] = matrix[i][j];
            temp--;
        }
     }
     for ( i=0;i<N;i++){
         for ( j=0;j<N;j++){
            ans += ans[i][j];
         }
     }
     console.log(ans);
}
