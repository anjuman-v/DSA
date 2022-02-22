function patternOfL(N) {
    // Write code here
    for(var i=0;i<N;i++){
        var bag = "";
        for(var j=0;j<N;j++){
            if(j===0 ||i=== N-1){
                bag += "* ";
            }
            else{
                bag += "";
            }
        }
        console.log(bag);
    }
}
