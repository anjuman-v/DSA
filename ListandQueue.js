function runProgram(input){
    input=input.trim().split("\n");
    var N=+input[0];
    var queue=[];
    for(var i=1; i<=N; i++){
        if(input[i].length>1){
            var arr=input[i].trim().split(" ");
        }
        else{
            var arr=input[i];
        }
        
     if(arr.length==2){
            queue.push(arr[1]);
        }
        else{
            if(queue.length==0){
                console.log("Empty");
            }
            else{
                console.log(queue[0]);
                queue.shift();
            }
        }
    }

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