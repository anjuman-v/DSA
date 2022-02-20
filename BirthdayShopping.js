function runProgram(input) {
   input = input.trim().split(" ");
   var N = +input[0];
   var K = +input[1];

    var newStr = [];
    var rec1 = 0;
    var rec = 1;
    var arr = [];
    function split1(N, rec) {
        if (rec > N) {
            return arr;
        }
     arr.push(rec);
    return split1(N, rec + 1);
    }
    split1(N, rec)
    bdayS(arr,K,rec1,newStr);
  //console.log(arr);
}
  
 function bdayS(arr, K, rec1, newStr){
    //  console.log(arr, K, curr1, newStr);

  if(newStr.length == K){
  console.log(newStr.join(" "));
   }
  if(rec1 == arr.length){
  return;
 }
 for(var i=rec1;i<arr.length;i++){
        newStr.push(arr[i]);
        bdayS(arr,K, i + 1, newStr);
        newStr.pop();
    }
}
  
  if (process.env.USERNAME === "") {
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