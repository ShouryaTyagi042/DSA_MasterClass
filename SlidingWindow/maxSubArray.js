function maxSubArray(arr , val) {
    Array.sort(arr) ;
    let max =  0  ;
    let temp = 0 ;
    for ( let i = 0 ; i <= val ; i++) {
        max += arr[i] ;
    }
    for(let j = val + 1 ; j < arr.length ; j++) {
        temp = temp + arr[j] - arr[j-val] ;
        max = Math.max(temp,max) ;
    }
    return temp ;
}


