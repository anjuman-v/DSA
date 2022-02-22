function runProgram(input) {
    var x = +input
    console.log(Math.log(beyondFactorial(x)).toFixed(4))
}
function beyondFactorial(x) {
    if (x == 1) {
        return 1;
    } 
    else {
        return x * beyondFactorial(x - 1)
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