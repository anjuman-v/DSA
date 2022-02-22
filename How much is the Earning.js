function runProgram(input){
 input  = input.split('\n');
  var tc = +input[0]
  var line = 1;
 for(var i=1;i<=tc;i++){
     var [N, R] = input[line].trim().split(" ").map(Number);
      line++;
     var arr = input[line].trim().split(" ").map(Number);
     line++;
     //console.log(N, R, arr)
     //console.log(str)
     howmuchEarning(N, R, arr);
  } 
}
 function howmuchEarning(N, R, arr){
     var k = 0;
     var count = 0;
   for(var i=0;i<N;i++){
      if(arr[i]>k){
          k=arr[i];
          count++;
      }
   } 
  console.log(count*R)
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