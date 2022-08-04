function validAnagram(str1,str2) {
     if(str1.length != str2.length) {
        return false ;
     }
     let frequency1 = {} ;
     let frequency2 = {} ;
     for ( let i = 0 ; i < str1.length ; i++) {
        frequency1[str1[i]] = (frequency1[str1[i]] || 0) + 1 ;
     }
    for ( let i = 0 ; i < str1.length ; i++) {
        frequency2[str2[i]] = (frequency2[str2[i]] || 0) + 1 ;
     }
    // console.log(frequency1) ;
    // console.log(frequency2) ;
    for ( let key in frequency1 ) {
        if ( frequency1[key] !== frequency2[key]) {
            return false ;
        }
    }
    return true ;
}

console.log(validAnagram("shourya","shouayr")) ;
