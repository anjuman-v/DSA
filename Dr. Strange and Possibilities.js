function runProgram(input) {
   var N = +input.trim()
   var rec = 1;
   var arr = [];
   function split(N,rec){
        if(rec > N ){
            return arr;
        }
        arr.push(rec);

        return split(N,rec+1);
   }
  var str = split(N,rec)
    // console.log(str);
   var newrec = 0;
    var newStr = [];
   genSub(str,newStr,newrec);
}

function genSub(str, newStr, newCurr){
    // console.log(str,newCurr,newStr);
   if(newStr.length >= 0){
        console.log(newStr.join(" "));
    }
    if(newCurr > str.length){
        return;
    }

    for(var i = newCurr; i < str.length; i++){
        newStr.push(str[i]);
        genSub(str,newStr,i+1);
        newStr.pop();
    }
}


  
  if (process.env.USERNAME === "ANJUMAN") {
      runProgram(`3`);
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