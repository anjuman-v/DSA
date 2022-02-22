function runProgram(input) {
input = input.trim().split("\n");
var str = input[0];
var substr = input[1];
twoStringProblem(str, substr);
}
function twoStringProblem(str, substr){
 var s = 0;
   var top = 0;
   var n = substr.length
   var l = str.length
 for(var i = 0; i<l; i++){
     if(str[i]==substr[top]){
         s++
         top++;
        }
    }
 if(s != n){
  console.log("No")   
 }
 else{
     console.log("Yes")
 }
  
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