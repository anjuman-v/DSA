function runProgram(input){
  input = input.split('\n')  
   var tc = +input[0];
   var line = 1;
   for(var i=1;i<=tc;i++){
       var n = +input[line];
       line++;
       var arr = input[line].split(" ").map(Number);
       line++;
        sumOfDigits(n, arr);
    }
}

function sumOfDigits(n, arr){
    var bag = 0;
    for(var i=0;i<arr.length;i++){
        var n = arr[i];
        var sum = 0;
        while(n>0){
            var l = n%10;
            sum += l;
            n = Math.floor(n/10);
        }
        bag += sum 
    }  
    
    console.log(bag)
    //line = line+2
 }

if (process.env.USER === "Anjumam") {
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