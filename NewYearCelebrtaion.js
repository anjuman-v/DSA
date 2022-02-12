function runProgram(input){
  input = input.split("\n");
    var tc = +input[0];
    var line = 1;
    var stack = [];
    var queue = [];
    for (var i = 1; i <= tc; i++) {
        var [a, n] = input[line].split(" ").map(Number);
        line++;
        //console.log(a, n)
     if (a === 1 && n !== undefined) {
            queue.push(n);
        } 
        else if (a === 2 && n !== undefined) {
            stack.push(n)
        }
        else if (a === 3 && n === undefined) {
            if (queue.length === 0) {
                console.log(-1);
            }
            else {
               console.log(queue[0]);
            }

        } 
        else if (a === 4 && n === undefined) {
            if (stack.length === 0) {
                console.log(-1);
            }
            else {
                console.log(stack[stack.length - 1]);
            }

        } 
        else if (a === 5 && n === undefined) {
            var z = queue.shift()
            stack.push(z)
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