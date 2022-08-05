function stringSearch(str , target) {
    let count = 0 ;
    for (let i = 0 ; i < str.length ; i++) {
        if ( str[i] === target[0]) {
            let flag  = true ;
            for (let j = 1 ; j < target.length ; j++ ) {
                if (str[++i] !== target[j]) {
                    flag = false ;
                    break;
                }
            }
            if (flag) count ++ ;
        }
    }
    return count ;
}

console.log(stringSearch("lorie loledlo","po")) ;
