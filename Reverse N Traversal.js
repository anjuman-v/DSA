function runProgram(input) {
    input  = input.split('\n')
  var tc = +input[0];
    var line = 1;
    for(var i =1; i<=tc; i++){
        var matrix = []
        var n = +input[line];
        line++;
        for(var j = 1; j<= n; j++){
            var arr = input[line].trim().split(" ").map(Number)
            line++;
         matrix.push(arr)
        }
        nTraversal(matrix, n);
    }
}

function nTraversal(matrix, n) {
  var ans = []
        for (var i=0;i<n;i++){ 
        ans.push(matrix[i][0]);
        }
        var j = 1;
        for (var i=n-2;i>=0;i--) 
        ans.push(matrix[i][j++]);
        
        for (var i=1;i<n;i++) {
            ans.push(matrix[i][n-1]);
        }
        console.log(ans.join(" "))
		

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