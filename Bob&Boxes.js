function runProgram(input) {
  var n = +input;
  console.log(bobBoxes(n))
}
function bobBoxes(n){
 if(n === 0){
     return 1;
 } 
 if(n < 0){
     return 0;
 }
 else{
     return bobBoxes((n-1)  + (n-3) + (n-5))
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