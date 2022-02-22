function runProgram(input){
 input = input.split('\n')
   var n = +input[0]
    var names = [], marks = [];
    for (var i = 1; i <= n; i++) {
     var arr = input[i].split(" ")
      names.push(arr[0])
       marks.push(Number(arr[1]))

    }
   
sortingArr(n, marks, names)
printingRank(n, marks, names)
}
function sortingArr(n, marks, names) {
    for (var i = 0; i < n - 1; i++) {
    var max = i
    for (var j = i + 1; j < n; j++) {
    if ((marks[max] < marks[j]) || (marks[max] == marks[j] && names[max] > names[j])) {
    max = j
    }
    }
    var temp = marks[i]
    marks[i] = marks[max]
    marks[max] = temp;
    var temp = names[i];
    names[i] = names[max];
    names[max] = temp;
    }
}
function printingRank(n, marks, names) {
    var rank = 1;
    var ranks = 1;
    console.log(rank + " " + names[0])
    ranks++;
    for (var i = 1; i < n; i++) {
        if (marks[i] != marks[i - 1]) {
            rank = ranks
        }
        ranks++;
        console.log(rank + " " + names[i])
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
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}