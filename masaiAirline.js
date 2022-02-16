function runProgram(input){
    input = input.trim().split('\n');
    var n = input[0];
    var arr1 = input[1].trim().split(" ").map(Number)
     var arr2 = input[2].trim().split(" ").map(Number) 
     masaiAurline(arr1, arr2, n) 
    
  }
  
  function masaiAurline(arr1, arr2, n) {
      for(var i=0;i<n;i++){
          if(arr1[i] <= 15 && arr2[i] <=7){
              console.log("Boarding")
          }
          else{
              console.log("Stop")
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