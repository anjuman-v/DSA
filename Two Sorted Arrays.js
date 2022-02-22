function runProgram(input){
    input = input.trim().split('\n');
    var tc = +input[0];
    var line = 1;
    for(var i=0;i<tc;i++){
     var n = +input[line].split(" ");
       line++;
       var arr1 = input[line].split(" ").map(Number);
       line++; 
       var arr2 = input[line].split(" ").map(Number);
       line++; 
    twoSortedArrays(arr1, arr2, n);
    }
}
function twoSortedArrays(arr1, arr2, n){
    var count = 0;
     var left = 0;
      var right = arr1.length-1
      while(left<arr1.length && right >= 0){
          if(arr1[left] < arr2[right]){
              left++;
          }
          else if(arr1[left]>arr2[right]){
              right--;
            }
              else{
                  count++;
                  left++;
                  right--;
                }
        }
     console.log(count)
    
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