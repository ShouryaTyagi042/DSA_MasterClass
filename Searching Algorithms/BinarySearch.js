
function binarySearch(nums,target) {
    let start = 0  ;
    let end = nums.length - 1 ;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2) ;
        // console.log(mid) ;
        if (nums[mid] === target) {
            return mid ;
        }
        if (nums[mid] > target ) {
            end = mid - 1 ;
        }
        else {
            start = mid + 1  ;
        }
    }
    return -1 ;

}

console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100));
