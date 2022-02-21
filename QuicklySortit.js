function solve(N,arr){
    var n=N-1;
    for(var i=0;i<n;i++){
        var min = i;
        for(var j=i+1;j<N;j++){
            if(arr[j]<arr[min]){
               min=j; 
            }
        }
        var ans = arr[i];
        arr[i]=arr[min];
        arr[min]=ans;
    }
    var bag = "";
    for(var y=0;y<N;y++){
       bag = bag+arr[y]+" " ;
    }
    console.log(bag);
}


function runProgram(input){
 input = input.split('\n');
 var N = +input[0];
 var arr = input[1].trim().split(" ").map(Number);
 solve(N,arr)
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