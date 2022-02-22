function runProgram(input) {
  input = input.split('\n');
  var t = +input[0];
  var line = 1;
  for(var i=0;i<t;i++){
      var n = +input[line];
      line++;
      console.log(santoshProfit(n));
  }
}
function santoshProfit(n){
    if(n < 0){
        return 0;
    }
    if(n === 0){
        return 1;
    }
    return santoshProfit(n-4) + santoshProfit(n-8);
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