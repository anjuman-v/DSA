function runProgram(input) {
    var s = input.split("")
    console.log(recursion(s, 0))
}
function recursion(s, i) {
    if (s[i] === undefined) {
        return 0;
    } else {
        return 1 + recursion(s, i + 1)
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