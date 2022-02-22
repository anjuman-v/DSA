function runProgram(input){
  input  = input.split('\n');
  var tc = +input[0]
  var line = 1;
 for(var i=1;i<=tc;i++){
     var [N, k] = input[line++].trim().split(" ").map(Number);
     var arr = input[line++].trim().split(" ").map(Number);
    twosum(arr, N, k);
    }
}
function twosum(arr, N, k){
var hash = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in hash) 
    console.log([hash[arr[i]], i]);
    return
    hash[k - arr[i]] = i
  }
  console.log([-1, -1]);
  return
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