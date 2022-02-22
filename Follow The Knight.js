 function runProgram(input) {
    var a = input.trim().split(" ").map(Number);
    var i = a[0];
    var j = a[1];
    var N = a[2];
    var Bord = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  knight(i,j,N,Bord);

    var count = 0;
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 10; j++){
            if(Bord[i][j] == 1){
                count++;
            }
        }
    }
console.log(count);
}
function knight(i, j,N,Bord){
 if(i < 1 || j < 1 || i > 10 || j > 10){
         return ;
     }
    if (N == 0 && Bord[i][j] == 1) {
        return;
    }
      if(N == 0){
         Bord[i][j] = 1;
     }
     else{
    knight(i-2,j+1,N - 1,Bord);
    knight(i - 2, j - 1, N - 1,Bord)
    knight(i + 2, j + 1, N - 1,Bord)
    knight(i + 2, j - 1, N - 1,Bord)
    knight(i - 1, j - 2, N - 1,Bord)
    knight(i + 1, j - 2, N - 1,Bord)
    knight(i - 1, j + 2, N - 1,Bord);
    knight(i + 1, j + 2, N - 1,Bord);
     }
    return Bord;
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