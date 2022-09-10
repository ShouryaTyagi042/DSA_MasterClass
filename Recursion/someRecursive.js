function someRecursive(arr,callBack){
  if (arr.length === 0) return false ;
  if (callBack(arr[0])) return true ;
  return someRecursive(arr.slice(1),callBack) ;

}
