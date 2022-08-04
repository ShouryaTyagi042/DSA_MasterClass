function areThereDuplicates(...args) {
    let check = {} ;
    for ( let val of args) {
        check[val] = (check[val] || 0) + 1 ;
        if (check[val] > 1) {
            return true ;
        }
    }
    return false ;
}

console.log(areThereDuplicates('a','b','c')) ;

