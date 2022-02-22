function runProgram(input) {
   input = input.trim().split("\n");
   var t = +input[0];
   var line = 1;
   for( var i = 0; i < t; i++){
       var N = +input[line].trim();
       line++;
     var amount = 1;
       NickHacks(N,amount);
     if (NickHacks(N, amount)) {
       console.log("Yes")
     } 
     else {
       console.log("No");
     }
   }
}

function NickHacks(N,amount ){
    if(amount == N){
     return true;
   }
   if(amount > N){
     return false;
   }
 return NickHacks(N, amount*10) || NickHacks(N,amount*20);
    
}

  if (process.env.USERNAME === "ANJUMAN") {
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
      process.exit(0) ;
    });
  }