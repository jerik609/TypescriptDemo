"use strict";
// ----------------------------------------------------------------
// functions
// ----------------------------------------------------------------
// ways to write a function
// #1 - declare it in a standard way 
// the types are ts thing, otherwise this is just javascript
function add(a, b) {
    return a + b;
}
// always provide the return type (it will be inferred, but it will be less error prone)
// eg when we fail to provide it and we miss return, it will be happy, returning a void (but it will be wrong)
function add2(a, b) {
    a + b;
}
console.log(add(1, 2));
// #2 - via a functional interface
let sub2 = function (a, b) {
    return a - b;
};
console.log(sub2(1, 2));
// #3 - using arrow functions (lambdas)
// in javascript, functions are first class citizens
let sub = (a, b) => a - b;
console.log(sub(1, 2));
// ----------------------------------------------------------------
// optional parameters, required parameters, rest parameters
// optional parameters
function add3(a, b, optionalc) {
    return optionalc ? a + b + optionalc : a + b; // this is not optional chaining!
}
console.log(add3(1, 2, 3));
console.log(add3(1, 2));
// required parameter(s)
const mult3 = (a, b, c = 10) => a * b * c;
console.log(mult3(1, 2));
console.log(mult3(1, 2, 3));
// rest parameters
// actually var args, nothing more, nothing less
const addmany = (a, b, c, ...d) => {
    return a + b + c + d.reduce((acc, n) => acc + n, 0);
};
console.log(addmany(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// or the old way
console.log(addmany(1, 2, 3, ...[4, 5, 6, 7, 8, 9, 10]));
// even a combination :-D
console.log(addmany(1, 2, 3, 4, 5, 6, ...[7, 8, 9, 10]));
// ----------------------------------------------------------------
// GENERIC FUNCTIONS
// takes array and creates an array?!
function getItems(arr) {
    return new Array().concat(arr);
}
let xorig = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let x1 = getItems(xorig);
// type inference will take care of the types, but for the sake of completeness
let x2 = getItems(xorig);
let x3 = getItems(xorig);
// https://www.freecodecamp.org/news/how-to-compare-arrays-in-javascript/
// therefore
// https://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript
if ((xorig.length == x1.length) && (xorig.every((v, i) => v === x1[i]))) {
    console.log("they are the same!"); // true
}
/*
"== vs ==="

The comparison x == y with equals operator, where x and y are operands, can produce boolean result which is either true or false.
The important thing to know is that while comparing both values, the JavaScript runtime will perform type coercion to make both values of the same type.
For example, if we try to compare a string value to a number value, then string value will be converted to first into the number type, and then the comparison will happen.

"10" == 10 -> becomes -> parseInt("10") == 10

The strict comparison x === y with equals operator, where x and y are values, produces true or false only when:
x and y are of the same type
x and y are have the same value
*/
console.log(getItems(["a", "b", "c", "d", "e", "f", "g"]));
