function cirTraversal(matrix,N) {
//write code here
 var top =0;
 var bottom = N-1;
 var left = 0;
 var right = N-1;
 bag = "";
 for(i=bottom;i>=top;i--){
    bag += matrix[i][left]+" ";
 }
  left++;
  for(j=left;j<=right;j++){
    bag += matrix[top][j]+" ";
 }
top++;
   for(k=top;k<=bottom;k++){
      bag += matrix[k][right]+" ";
}
right--;
for(l=right;l>=left;l--){
    bag += matrix[bottom][l]+" ";
}
console.log(bag);
}
