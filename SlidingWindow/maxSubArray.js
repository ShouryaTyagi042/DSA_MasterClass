function maxSubarraySum(arr , val) {
    // Array.sort(arr) ;
    if (arr.length < val) return null ;
    let max =  0  ;
    let temp = 0 ;
    for ( let i = 0 ; i < val ; i++) {
        max += arr[i] ;
    }
    temp = max ;
    // console.log(max);
    for(let j = val  ; j < arr.length ; j++) {
        temp = temp + arr[j] - arr[j-val] ;
        // console.log(temp);
        max = Math.max(temp,max) ;
    }
    return max ;
}


console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) ;
