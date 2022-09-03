function minSubArrayLen(arr,val) {
    let sum = 0 ;
    for(var i = 0 ; i < arr.length ; i++) {
        sum += arr[i];
    }
    if(sum < val ) return 0 ;
    if(sum === val )return arr.length ;
    let total = 0 ;
    let start = 0 ;
    let end = 0 ;
    let min = arr.length ;
    while(start < arr.length ) {
        if(total < val && end < arr.length) {
            total += arr[end] ;
            end ++ ;
        }
        else if (total >= val ) {
            min = Math.min(min,end-start) ;
            total -= arr[start] ;
            start -- ;

        }
        else {
            break ;
        }
    }
    return min ;

}
