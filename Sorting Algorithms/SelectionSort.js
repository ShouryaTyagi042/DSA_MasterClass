function selectionSort(arr) {
    for(let i = 0 ; i < arr.length ; i++ ) {
        var least = arr[i] ;
        for (var j  = i + 1 ; j < arr.length  ; j++) {
            // console.log(arr,j,i) ;
            if (arr[j] < least ) {
                swap(arr,j,i) ;
            }
        }
    }
    return arr ;

}

function swap (arr, a, b) {
    let temp = arr[b] ;
    arr[b] = arr[a] ;
    arr[a] = temp ;
}


console.log(selectionSort([1,4,7,234,4])) ;
