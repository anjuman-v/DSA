function runProgram(input) {
     input = input.split("\n");
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
     var s = input[line].split("")
      line++;
      string(s)
    }
}
function string(s){
       var obj = {}; 
      for(var i = "a".charCodeAt(0);  i <= "z".charCodeAt(0);i++) { 
          if(obj[String.fromCharCode(i)] == undefined) {
              obj[String.fromCharCode(i)] = 0; 
             }
         } 
      var bag = "";
     var queue = [];
     for(var i=0;i<s.length;i++){
      queue.push(s[i])
      obj[s[i]]++;
      while(queue.length !=0){
          if(obj[queue[0]] != 1){
              queue.shift()
          }
          else{
              break;
          }
      }
      if(queue.length ==0){
        bag += "#"  
      }
      else{
          bag += queue[0];
      }
     }

    
    console.log(bag)
}



if (process.env.USER === "ANJUMAN"){
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