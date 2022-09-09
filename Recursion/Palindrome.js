function isPalindrome(str,ans){
  if (ans === false) return false ;
  if (str.length <= 1) return ans ;
  return (str.slice(1,str.length-1),str[0] === str[str.length-1]) ;

}

console.log(isPalindrome('awesome') );
console.log(isPalindrome('tacocat')) ;
console.log(isPalindrome('amanaplanacanalpanama')) ;
console.log(isPalindrome('amanaplanacanalpandemonium')) ;
