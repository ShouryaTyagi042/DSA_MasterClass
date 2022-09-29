function sortedFrequency(arr, val){
  let i , j ;
  i = firstOccurence(arr,0,arr.length-1,val) ;
  if (i === -1 ) return i ;
  j = lastOccurence(arr,i+1,arr.length-1,val) ;
  return (j-i+1) ;
}

function firstOccurence(arr,start,end,val) {
  if (arr[0] === val )return 0 ;
  while (start <= end ) {
    let mid = Math.floor(end - (end - start) / 2 ) ;
    if (val > arr[mid - 1] && arr[mid] === val) return mid;
    else if ( val > arr[mid]) start = mid + 1 ;
    else end = mid - 1 ;
  }
  return -1 ;
}


function lastOccurence(arr,start,end,val) {
  if (arr[end] === val)return end ;
  while (start <= end ) {
    let mid = Math.floor(end - (end - start) / 2 ) ;
    if (val < arr[mid - 1] && arr[mid] === val) return mid;
    else end = mid - 1 ;
  }
  return -1 ;
}


console.log(sortedFrequency([1,1,2,2,2,2,3],1))
