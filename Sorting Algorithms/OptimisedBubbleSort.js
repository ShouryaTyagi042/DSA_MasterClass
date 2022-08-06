function bubbleSort(arr) {
    var noswaps ;
    for (let i = arr.length ; i > 0 ; i--) {
        noswaps = true ;
        for (let j = 0 ; j <  i - 1 ; j++ ) {
            console.log(arr,arr[j],arr[j+1]) ;
            if (arr[j] > arr[j+1]) {
                swap(arr,j,j+1) ;
                noswaps = false ;
            }
        }
        if (noswaps) break ;
    }

    return arr ;
}

function swap (arr, a, b) {
    let temp = arr[b] ;
    arr[b] = arr[a] ;
    arr[a] = temp ;
}

console.log(bubbleSort([1,4,7,234,4])) ;
