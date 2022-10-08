function findRotatedIndex(arr,target){
  var pivotIndex = findPivot(arr) ;
  if (pivotIndex === -1) return binarySearch(arr,0,arr.length-1,target) ;
  if (arr[pivotIndex] === target) return pivotIndex ;
  if (arr[pivotIndex] > target ) return binarySearch(arr,0,pivotIndex,target) ;
  else return binarySearch(binarySearch(arr,pivotIndex,arr.length-1,target)) ;
}

function findPivot(arr) {
  var start = 0 ;
  var end = arr.length -1 ;
  if (arr[start] < arr[end]) return -1 ;
  while (start <= end) {
    var mid = Math.floor(end - (end-start)/2) ;
    if (mid > start && arr[mid] < arr[mid-1]) return mid-1 ;
    if (mid < end && arr[mid] > arr[mid+1]) return mid ;
    if (arr[mid] <= arr[start]) {
      end = mid - 1 ;
    }
    else start = mid +1 ;
  }
  return -1 ;
}

function binarySearch(arr,start,end,target) {
  while (start <= end) {
    var mid = Math.floor(end - (end-start)/2) ;
    if (arr[mid] === target) return mid ;
    if (arr[mid] > target) end = mid - 1 ;
    else start = mid +1 ;
  }
  return -1 ;
}

console.log(findPivot([6, 7, 8, 9, 1, 2, 3, 4]))
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3))
