function nTraversal(matrix) {
 var bag="";
    var n=matrix.length;
    for(var i=n-1;i>=0;i--){
        bag+=matrix[i][0]+" "
    }
    for(i=1;i<n;i++){
    bag += matrix[i][i]+" ";
   }
   for(i=n-2;i>=0;i--){
        bag += matrix[i][n-1]+" ";
    }
       console.log(bag);
}
