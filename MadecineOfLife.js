function medicineOfLife(N,K,arr){
    var left = 0;
       var right = arr.length - 1;
        while(left < right){
         sum = arr[left] + arr[right];
           if (sum == K){
               console.log("Possible");
               return;
           }
            else if (sum > K) {
            right--;
            }
            else{
                left++;
            }
        }
          console.log("Impossible") 
    }
    