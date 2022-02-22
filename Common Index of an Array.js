function runProgram(input){
 input = input.trim().split('\n');
  var tc = +input[0]
  var line = 1;
  for(var i=0;i<tc;i++){
  var n1 = +input[line];
  line++;
  var arr1 = input[line++].split(" ").map(Number);
  var n2 = +input[line];
  line++;
  
  var arr2 = input[line++].split(" ").map(Number);
  
  commonIndexanArray(arr1, arr2, n1, n2);
    
  }
}
 function commonIndexanArray(arr1, arr2, n1, n2){
  var i=0;
var j=0;
var bag = [];
while(i < arr1.length && j < arr2.length){
 if (arr1[i] == arr2[j]){
  bag.push(arr1[i]);
    i++;
     j++;
    }
   else if(arr1[i] > arr2[j]) {
     j++;
    }
     else{
   i++;
  }
}
  
if (bag.length > 0) {
        console.log(bag.join(" "));
    } else {
        console.log(-1);
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