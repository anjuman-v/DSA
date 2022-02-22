function runProgram(input) {
   input = input.split('\n')
    var tc = +input[0]
    var line = 1
    for(var i=1;i<=tc;i++) {
        var n = +input[line]
        line++
        var arr = input[line].split(" ").map(Number)
        line++
        console.log(rec(n, arr, 0))
    }
}
function rec(n, arr, i) {
    if (i == n) {
        return 0;
    } else {
        return arr[i] + rec(n, arr, i + 1)
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