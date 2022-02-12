function runProgram(input){
    input=input.trim().split("\n");
    var t=+input[0];
    var queue=[];
    for(var i=1; i<=t; i++){
    var arr=input[i].trim().split(" ");
     if(arr.length==2 && arr[0]=="E"){
         queue.push(arr[1]);
          console.log(queue.length);
        }
        else{
            if(queue.length===0){
                console.log(-1,queue.length);
            }
            else{
                let num=queue.shift();
                console.log(num,queue.length);
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