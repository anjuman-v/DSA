function spiralTraversal(N, M, arr){
    //write code here
  var count = 0; 
  var size = N*M; 
  var top = 0;
  var bottom = N-1; 
  var left = 0; 
  var right = M-1;
  var bag = "";
   while(count < size){
       for(var i=top;i<=bottom && count < size ;i++){
           bag += arr[i][left] + " ";
           count++;
       }
       left++;
       for(i=left;i<=right && count < size ;i++){
           bag += arr[bottom][i] + " ";
           count++;
       }
       bottom--;
       for(i=bottom;i>=top && count < size;i--){
          bag += arr[i][right] + " ";
           count++;
       }
       right--;
       for(i = right;i>=left && count < size;i--){
           bag += arr[top][i] + " ";
           count++;
       }
       top++;
      // break;
   }
   console.log(bag)
}
