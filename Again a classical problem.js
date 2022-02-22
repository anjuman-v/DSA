function runProgram(input){
 input = input.trim().split('\n');
 var tc = +input[0];
 var line = 1;
 for(var i=0;i<tc ;i++){
    isBalanced(input[line])
    line++;
  }
}

   
function isBalanced(s) {
    var openers = ['(', '{', '['];
    var closers = {
        ')': '(', 
        '}': '{', 
        ']': '['
    };
    var stack = [];

    for (var i=0; i<s.length; i++) {
        var c = s.charAt(i);
        if (openers.includes(c)) {
            stack.push(c);
        } else if (closers[c]) {
            if (stack.length == 0) {
                console.log("not balanced")
                return;
            }

            if (stack.pop() !== closers[c]) {
                console.log("not balanced")
                return;
            }
        }
    }

    if (stack.length > 0) {
       console.log("not balanced")
       return;
    }

    console.log("balanced");
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