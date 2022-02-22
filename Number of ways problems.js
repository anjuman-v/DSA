function runProgram(input) {
    var n = +input
    console.log(F(n))
}
function F(n){
    if (n === 1 || n === 0) {
        return 1;
    } else if (n == 2) {
        return 2
    } else {
        return F(n - 1) + F(n - 2) + F(n - 3)
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