function Array3D(N,M,K,array) {
  //write code here
  for(var i=0;i<N;i++){
      for(var j=0;j<M;j++){
          var bag = "";
          for(var y=0;y<K;y++){
              bag += array[i][j][y] + " ";
          }
          console.log(bag)
      }
      
  }
}
