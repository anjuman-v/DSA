function runProgram(input){
    input = input.trim().split('\n');
    var tc = +input[0];
    var line = 1;
    for(var i=0;i<tc;i++){
     var [n ,K] = input[line++].trim().split(" ").map(Number)
    var arr = input[line++].trim().split(" ").map(Number)
     takeoutMaximum(arr, n, K)
     //console.log(arr)
    }
}
function takeoutMaximum(arr, n, K){
    var sum = 0;
    var min = -200000000;
   for(var i=0;i<K;i++){
       sum = sum + arr[i];
    }
    if(sum > min){
        min = sum;
    }
    for(i=K;i<n;i++){
      sum = sum - arr[i-K];
      sum = sum + arr[i];
      if(sum < min){
         min = sum; 
      }
   }
   console.log(min)
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