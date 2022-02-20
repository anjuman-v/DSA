function runProgram(input) {
  input = input.trim().split("\n");
  var N = +input[0];
   var str = input[1].trim()
   var rec = 0;
  var newStr = [];
   allSub(str,newStr,rec);
}

function allSub(str,newStr,rec){
 if(newStr.length  > 0){
    console.log(newStr.join(""));
  }
  if(rec == str.length){
    return;
  }

  for(var i=rec;i<str.length;i++){
    newStr.push(str[i]);
    allSub(str,newStr,i+1);
    newStr.pop();
  }
}

  if (process.env.USERNAME === "Anjuman") {
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