function runProgram(input) {
    var n = +input
    console.log(fRec(n))
}
function fRec(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fRec(n - 1)
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