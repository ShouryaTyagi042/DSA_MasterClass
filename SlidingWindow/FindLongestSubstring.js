function findLongestSubstring(str){
  let start = 0 ;
  let seen = {} ;
  let len = 0 ;
  for(var i = 0 ; i < str.length ; i++) {
    var char = str[i] ;
    if(seen[char]) {
      start = Math.max(start, seen[char]) ;
    }
    len = Math.max(len,i-start + 1 ) ;
    seen[char] = i+ 1 ;
  }
  return len ;
}
console.log(findLongestSubstring('longestsubstring')) ;
