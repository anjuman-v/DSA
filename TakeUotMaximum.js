function runProgram(input){
    input = input.trim().split('\n');
     var [n ,K] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
     takeoutMaximum(arr, n, K)
}
function takeoutMaximum(arr, n, K){
    var sum = 0;
    var max = -200000000;
   for(var i=0;i<K;i++){
       sum = sum + arr[i];
    }
    if(sum > max){
        max = sum;
    }
    for(i=K;i<n;i++){
      sum = sum - arr[i-K];
      sum = sum + arr[i];
      if(sum > max){
         max = sum; 
      }
   }
   console.log(max)
}
     

    
    
    
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}