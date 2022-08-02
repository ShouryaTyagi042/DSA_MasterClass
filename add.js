function addupton (n) {
    // body...
    let total = 0 ;
    for (let i = 0 ; i <= n ; i++) {
        total += i ;
    }
    return total ;
}

var t1 = performance.now() ;
addupton(100000000) ;
var t2 = performance.now() ;
console.log(t1) ;
console.log('Time elapsed: ${(t2-t1)/1000} seconds.')
