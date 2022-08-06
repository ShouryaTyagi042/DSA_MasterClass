function compare(num1 , num2) {
    return num1 - num2 ;
}

function compareStr(str1 , str2) {
    return str1.length - str2.length ;
}

console.log([1,2,4,7,3,4].sort(compare)) ;
// [ 1, 2, 3, 4, 4, 7 ]

console.log(["shourya","rachit","kapish","arjun","samarth","ritvik"].sort(compareStr)) ;
// [ 'arjun', 'rachit', 'kapish', 'ritvik', 'shourya', 'samarth' ]

