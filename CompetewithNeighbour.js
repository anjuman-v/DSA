function runProgram(input) {
   input = input.split("\n");
   var n = +input[0];
   var arr = input[1].split(" ").map(Number);
   competewithNeighbour(n, arr)
}
function competewithNeighbour(n, arr){
    var c = 0;
  for(var i=0;i<n;i++){
     if (i === 0){
         if (arr[i] > arr[i+1]){ 
         c++
         }
     }
     else if (i == n - 1){
         if (arr[i] > arr[i-1]) {
         c++
         }
     }
     else{ 
         if (arr[i]>arr[i+1] && arr[i] > arr[i-1]){ 
         c++
         }
     }
   }
    console.log(c)
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