function runProgram(input){
  input = input.trim().split('\n');
  var tc = +input[0]
  var line = 1;
  for(var i=1;i<=tc;i++){
    var [N, K] = input[line].trim().split(" ").map(Number);
   line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    RotateArrayReturnsback(N, K, arr);
  }
}
function RotateArrayReturnsback(N, K, arr){
   var k=K%N;
   var ans = "";
   for(var i=0;i<N;i++){
       if(i<k){
       ans += arr[N+i-k]+" "
       }
       else{
           ans += arr[i-k]+" "
       }
   }
   console.log(ans)
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
}Rotate the array returns back