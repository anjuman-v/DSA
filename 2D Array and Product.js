function runProgram(input){
    input = input.split("\n");
    var [ N, M, s] = input[0].split(" ").map(Number);

    var mat = [];
    var line = 1;
    for(var i=0;i<N;i++){
      mat.push(input[line++].split(" ").map(Number)) 
      
    }
    twoArrayAndSum(mat, N, M, s)
    //console.log(mat)
}

function twoArrayAndSum(mat, N, M, s){
    
     var a = mat;
    var sum = 0
    var count = 0;
    
 for (var i=0;i<N;i++){
  for (var j = 0;j<M;j++){
      
   if (j<a[i].length-2) {
        var temp = a[i][j] * a[i][j+1] * a[i][j+2];
        if (temp == s){
        count++;
        }
   }
    if (i<a.length-2) { 
          temp = a[i][j] * a[i+1][j] * a[i+2][j];
         if (temp == s){
         count++;
         }
    }
    
     if (i<a.length-2 && j<a[j].length-2) {
         temp = a[i+2][j] * a[i+1][j+1] * a[i][j+2];
         if (temp == s){
         count++;
         }
     }
     if (i<a.length-2 && j<a.length-2) {
         temp = a[i][j] * a[i+1][j+1] * a[i+2][j+2];
         if (temp == s) {
         count++;
         }
     }   
   }
  }
  console.log(count);
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