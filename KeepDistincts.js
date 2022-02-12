function runProgram(input) {
    keepDistincts(input)
}
 function keepDistincts(s) {
  let str = "";
  for (let i = 0; i < s.length; i++){
       let c = s[i];
        if (str.indexOf(c) < 0){
          str += c;
         }
        }
        console.log(str);
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
        runProgram(read);
    });

    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}