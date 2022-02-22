function runProgram(input){
  var input = input.split("\n");
    var tc = +input[0];
    var stack = [];
    for (var i = 1; i <= tc; i++) {
        if (input[i] == 1) {
            if (stack.length == 0) {
                console.log("No Food");
            } else {
                console.log(stack[stack.length - 1]);
                stack.pop();
            }
        } else {
            var q = input[i].split(" ").map(Number)
            stack.push(q[1]);
        }
    }
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