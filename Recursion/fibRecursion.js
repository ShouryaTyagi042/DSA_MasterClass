function fib(val) {
    if(val <= 2) {
        return 1 ;
    }
    return fib(val-1) + fib(val-2) ;
}

console.log(fib(4)) ;
