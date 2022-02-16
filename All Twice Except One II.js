function allTwiceExceptOne(N,arr){
	//write your code here
	var obj = {};
	for(var i=0;i<arr.length;i++){
	    if(obj[arr[i]]==undefined){
	      obj[arr[i]] = 1;
	    }
	      else{
	          obj[arr[i]]++
	    }
	}
	
var min = 0;
for(var x in obj){
    if(obj[x]==1){
      console.log(x)  
        
    }
}

}
