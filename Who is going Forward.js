function runProgram(input){
 input = input.trim().split('\n');
   var [N, k] = input[0].trim().split(" ").map(Number);
  
    var arr = input[1].trim().split(" ").map(Number);
    
    //console.log(arr)
    //console.log(N, k) 
    whogoingForward(arr, N, k);
  
}
 function whogoingForward(arr, N, k){
   var  count = 0;
    for (i=0;i<arr.length;i++){
      if (arr[i] >= arr[k-1] && arr[i] > 0){
          count++;
      }
    }
    console.log(count)
    return;


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