function runProgram(input){
    input = input.trim().split("\n");
    var [N, K] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
     nobodyMasai(N, K, arr);
}
function nobodyMasai(N, K, arr){
    var c =0; 
    var q =0;
     for(var i =0; i<N; i++){
        if(arr[i]<=K){
          c++;
        }
         else{
             q++;
         }
         if(q == 2){
             break;
         }
     }
    console.log(c);
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