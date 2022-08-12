function averagePair(arr, avg) {
    let l = 0 ;
    let r = arr.length - 1 ;
    while (l < r) {
        let a = (arr[l] + arr[r])/2 ;
        if (a === avg) {
            return true ;
        }
        if (avg > a) {
            l++ ;
        }
        else {
            r-- ;
        }
    }
    return false ;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) ;
