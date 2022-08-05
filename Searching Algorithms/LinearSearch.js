function linearSearch(nums,target) {
    for ( let i = 0 ; i < nums.length ; i++) {
        if (nums[i] == target ) {
            return i ;
        }
    }
    return -1 ;
}

console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)) ;
