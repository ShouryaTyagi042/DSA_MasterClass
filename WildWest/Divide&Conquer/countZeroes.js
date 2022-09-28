function countZeroes(arr){
    if (arr[0] === arr[arr.length-1]) {
        if (arr[0] === 1) return 0 ;
        if (arr[0] === 0) return arr.length ;
    }
    var start = 0 ;
    var end = arr.length - 1 ;
    while (start <= end) {
        var mid = Math.floor(end - (end - start ) / 2) ;
        if (arr[mid] > arr[mid + 1 ] ) return arr.length - mid - 1 ;
        if ( arr[mid] === 1) start = mid + 1  ;
        if ( arr[mid] === 0) end = mid - 1  ;
    }
    return arr.length - start - 1;
}



// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
console.log(countZeroes([1,0,0,0,0])) ;
