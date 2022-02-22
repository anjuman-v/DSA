function runProgram(input){
  input = input.split('\n')  
   var tc = +input[0];
   //console.log(tc)
   var line = 1;
   var stack = [];
   
  for(var i=0;i<tc;i++){
      var [a, n] = input[line].trim().split(" ").map(Number)
      line++;
    //   console.log(a, n)
    //   pushPopandTop(a, n)
    if(a==1){
        stack.push(n)
    }
    else if(a==2){
        stack.pop()
        }
         else if(stack.length===0){
                console.log("Empty!")
            }
        else if(a==3){
               console.log(stack[stack.length-1])   
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