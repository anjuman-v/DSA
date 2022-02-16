function spiralTraversalV(N, matrix){
    //write code here
  
var count = 0;
var top = 0;   //row_start
var bottom = N-1; //row_end
var left = 0;
var right = N-1;
var bag = "";
 var arr = matrix;
while(count < N*N){
for(var i = top; i <= bottom && count < N*N; i++){
  bag += arr[i][right] + " "; 
  count++;
}
right--; // r-2

for(i = right; i >= left && count < N*N ;i--){
  bag += arr[bottom][i] + " ";
  count++;
}
bottom--;

for(i = bottom; i >= top && count < N*N; i--){
  bag += arr[i][left] + " ";
  count++;
}
left++;
// 01 02
for(i = left; i <= right && count < N*N; i++){
  bag += arr[top][i] + " ";
  count++;
}
top++;
}
console.log(bag);
}


    
