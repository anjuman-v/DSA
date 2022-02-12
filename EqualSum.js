function runProgram(input) {
  input = input.trim().split(" ").map(Number)
    equalSum(input)
}
function equalSum(n){
 var ans = false;
 var a=n[0]
 var b=n[1]
 var c=n[2]
 var d=n[3]
 if(a+b == c+d){
     ans = true;
  }
     else if(a+c == b+c){
         ans = true;
     }
    else if(a+d == b+c){
     ans = true;   
    }
    else if(b+c == a+d){
        ans = true;
    }
    else{
        ans = false;
    }
    if(ans === true){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}

if (process.env.USER === "ANJUMAN") {
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
        runProgram(read);
    });

    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}