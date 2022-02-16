function runProgram(input){
    input = input.trim().split("\n");
    var size = +input[0];
    var array = input[1].trim().split(" ").map(Number)
      arrayString(array)
     //console.log(arr) 
  }
  function arrayString(array){
   var ans = [];
   for(var i=0;i<array.length;i++){
       if(array[i]<0){
           array[i]=0;
           ans += array[i]
       }else{
           array[i]==array[i]
           ans += array[i]
       }
   }
   console.log(ans)
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
  