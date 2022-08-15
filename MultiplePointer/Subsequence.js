function isSubsequence(str1,str2) {
  let p1 = 0 ;
  let p2 = 0 ;
  while (p1 < str1.length && p2 < str2.length) {
    if (str1[p1] === str2[p2]) {
      p1++ ;
    }
    p2++ ;
  }
  if (p1 === str1.length) return true ;
  return false ;
}
console.log(isSubsequence('acb', 'abc'));
