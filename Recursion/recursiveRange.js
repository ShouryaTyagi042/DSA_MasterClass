// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(val){
    if (val === 0 ) {
        return 0 ;
    }
    return val + recursiveRange(val-1) ;

}

console.log(recursiveRange(10)) ;

