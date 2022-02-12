function stockItUp(N,elements){
    //write code here
  var ans = 0;
  var p = [550,240,84,159,80,160,252];
  for(var i=0;i<elements.length;i++){
      var data = elements[i]*p[i];
      ans += data
  }
  console.log(ans*N)
}

