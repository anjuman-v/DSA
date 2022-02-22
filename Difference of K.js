function runProgram(input){
 input = input.trim().split('\n');
  var tc = +input[0]
  var line = 1;
  for(var i=1;i<=tc;i++){
    var [N, k] = input[line].trim().split(" ").map(Number);
   line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    differenceofK(arr, N, k);
  } 
}
 function differenceofK(arr, N, k){
     var i = 0;
        var j = 1;
        while(j<N){
            if(arr[j]-arr[i]==k){
                console.log("Yes")
                return;
            }
            else if(arr[j]-arr[i]>k){
               i++ ;
            }
           else if(arr[j]-arr[i]<k){
               j++;
           } 
        }   
        console.log("No");
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