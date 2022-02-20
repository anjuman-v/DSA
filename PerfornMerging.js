function runProgram(input) {
    input = input.trim().split("\n");
   var N = +input[0];
   var arr1 = input[1].trim().split(" ").map(Number);
    var arr2 = input[2].trim().split(" ").map(Number);
    var rec = 0;
    var arr = arr1.concat(arr2);
    console.log(perfMerging(arr,rec));
   
  }

function perfMerging(arr,rec){
    if (rec > arr.length - 1) {
        return arr.join(" ");
    }
     var n = rec-1
     for(var i=0; i<arr.length-n;i++) {
        if (arr[i] > arr[i + 1]) {
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    return perfMerging(arr, rec + 1);
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