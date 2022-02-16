function binaryMatrix(N,M, matrix) {
    //write code here
    for(var i=0;i<N;i++){
         var bag ="";
        for(var j=0;j<M;j++){
            if(matrix[i][j]==0){
                bag += "1" +" "; 
            }
            else{
                bag+= "0"+" ";
            }
        }
       console.log(bag)  
    }
  //   console.log(bag)
  }
  