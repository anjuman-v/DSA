function runProgram(input) {
     input = input.split("\n");
    var tc = +input[0];
    var line = 1;
    for (var i = 0; i < tc; i++) {
        var n = +input[line];
        line++;
        var arr = input[line].split(" ").map(Number);
        arr.reverse();
        line++;
        output(n, arr);
    }
}
function output(n, arr) {
    var stack = [],
        ans = [];
    for (var i = 0; i < n; i++) {
        while(stack.length > 0 && arr[i] >= stack[stack.length-1]){
        stack.pop();    
        }
        if(stack.length == 0){
            ans[i] = -1;
        }
        else{
            ans[i] = stack[stack.length-1];
        }
        stack.push(arr[i]);
    }
        console.log(ans.reverse().join(" "))

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