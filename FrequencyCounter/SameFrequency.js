function sameFrequency(num1, num2) {
    if (num1 === num2) return true ;
    let n1 = num1 + "" ;
    let n2 = num2 + "" ;
    if (n1.length !== n2.length) return false ;
    let frequency1 = {} ;
    let frequency2 = {} ;
    for(let i = 0 ; i < n1.length ; i++) {
        frequency1[n1.charAt(i)] = (frequency1[n1.charAt(i)] || 0 ) + 1 ;
    }
    for (let i = 0; i < n1.length; i++) {
    let letter = n2[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!frequency1[letter]) {
      return false;
    } else {
      frequency1[letter] -= 1;
    }
  }
  return true ;

}

console.log(sameFrequency(123,122)) ;
