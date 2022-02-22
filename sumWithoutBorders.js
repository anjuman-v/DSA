function sumWithoutBorders(N, M, matrix){
    //write code here
  var sum = 0;
  var n = N-1;
  var m = M-1;
  for (i=0;i<N;i++){
  for (j=0;j<M;j++){
    if (i === 0 || i === n || j ===0 || j === m){
      continue;
    }else{
    sum += matrix[i][j]
    }
      }
  }
  console.log(sum)
}
