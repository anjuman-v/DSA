function runProgram(input) {
  input = input.trim().split("\n");
  var N = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  var rec = 0;
  GeneratePermutations(arr, rec);
 reqArr.sort((a,b) => (a -b))
 reqArr.forEach((el)=>{
var reqAns = el.split("")

    console.log(reqAns.join(" "));
  })

   
}


var reqArr = [];
function GeneratePermutations(arr,rec){
  if(rec == arr.length){
    var ans = arr.join("");
    reqArr.push(ans);
    return;
  }
  for(var i = rec; i < arr.length; i++){
    var temp = arr[i];
      arr[i] = arr[rec];
      arr[rec] = temp;
      GeneratePermutations(arr,rec+1);
      var temp1 = arr[i];
      arr[i] = arr[rec];
      arr[rec] = temp1;

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