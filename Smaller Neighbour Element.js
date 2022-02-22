function runProgram(input){
 input = input.trim().split("\n");
   var n = +input[0];
   var arr = input[1].trim().split(" ").map(Number);
     smallerNeighbourElement(arr)
 }
function smallerNeighbourElement(arr){
    var stack=[];
    var ans = [];
    for(var i=0;i<arr.length;i++){
        while(stack.length != 0 && arr[i] <= stack[stack.length-1]){
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
    console.log(ans.join(" "))
}

if (process.env.USER === "Anjuman") {
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