'use strict';
//#1 
let arr = [2, -5, 1, -2, 0, -3, 2, -14];
function transform(array) {
    let filtred = array.filter(function(elem) {
        return elem > 0;
    })
    let sqrt = filtred.map(function(elem) {
        return Math.round(Math.sqrt(elem) * 100) / 100;
    })
    return sqrt;
}
console.log(transform(arr));

//#2
let arr2 = [4, 3, 5, 5, 0, 4, 8, 6];
function getSum(array) {
    let result = 0;
    array.reduce(function(sum, current) {
        if(current == 0) {
            result = sum; 
            return sum;
        } 
        return sum + current;
    })
    return result;
}
console.log(getSum(arr2));

 //#3
function summArguments() {
    let outcome = 0;
    for(let i = 0; i < arguments.length; i++ ) {
        outcome+=arguments[i];
    }
    return outcome;
}
console.log(summArguments(10, 1, 2, 5));
console.log(summArguments(10));