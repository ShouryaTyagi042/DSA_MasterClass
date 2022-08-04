function countUniqueValues(arr) {
    if (arr.length == 0 ) return 0 ;
    let c1 = 0 ;
    let c2 = 1 ;
    let count = 1 ;
    while (c2 < arr.length) {
        if ( arr[c1] != arr[c2] ) {
            count ++ ;
        }
        c1 ++ ;
        c2 ++ ;
    }
    return count ;
}

console.log(countUniqueValues([1,1,1,1,1,2])) ;
