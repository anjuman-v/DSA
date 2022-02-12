function runProgram(input){
  input =input.trim().split("\n");
   var tc = +input[0];
    var que = [];
    for (var i=1; i<=tc; i++){
        if (input[i].length>1){
            var arr=input[i].trim().split(" ");
            listandQueue2(arr,que);
        }
        else if(input[i].length === 1){
            arr = input[i];
            listandQueue2(arr,que);
        }
    }
}
function listandQueue2(arr,que){
    if(arr[0]==="Push" && arr.length > 1 ){
        que.push(arr[1]);
    }else{
        if(que.length===0){
            console.log("Empty");
        }else{
            console.log(que[que.length-1]);
            que.pop();
        }
    }
}

if (process.env.USER === "ANJUMAN") {
  runProgram(``);
} 
 else {
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