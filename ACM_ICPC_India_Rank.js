function ACM_ICPC_India_Rank(N, countriesArr) {
  //write code here
  var bag = 0;
  for(var i=0;i<N;i++){
      if(countriesArr[i]=="India"){
         bag += i+1
      }
  }
   console.log(bag)
}
