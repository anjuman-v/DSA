//Array - Multiple Test Cases
function runProgram(input){
  input = input.split('\n')  
   var tc = +input[0];
   var line = 1;
   for(var i=1;i<=tc;i++){
       var size = +input[line];
       line++;
       var arr = input[line].split(" ").map(Number);
       line++;
    //   console.log(tc)
    //   console.log(size)
    //   console.log(arr)
       sumofArray(size,arr);
   }
}

function sumofArray(size,arr){
 var sum = 0;
 var ans = "";
 for(var i=0;i<size;i++){
     sum +=  arr[i];
     ans += sum + " ";
 }
 console.log(ans)
}
    

 

if (process.env.USER === "ANJUMAN") {
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