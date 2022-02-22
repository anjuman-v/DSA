function runProgram(input){
  input = input.trim().split(" ").map(Number);
  misint(input)
  //console.log(input)
}

function misint(arr){
   var total = 1;
   var n = arr.length;
        for (var i = 2; i <= (n + 1); i++)
        {
            total += i;
            total -= arr[i - 2];
        }
        console.log(total)
        return ;
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