function runProgram(input){
    input = input.trim().split('\n');
    var tc = +input[0];
    var line = 1
    for(var i=0;i<tc;i++){
     var n = input[line++].trim().split(" ").map(Number)
    var arr = input[line++].trim().split(" ").map(Number)
     majorElements(arr, n)
    }
}
function majorElements(arr, n){
   var c= 0;
   for(var i=0;i<n;i++){
       for(var j=i;j<n;j++){
          if(arr[i] ==arr[j]){
              c++;
          } 
       }
       if(c>Math.floor(n/2)){
           console.log(arr[i])
           break;
       }
       else{
           console.log("-1")
           break;
       }
   }
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