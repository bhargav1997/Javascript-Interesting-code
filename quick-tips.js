/* Quick Tips */
const array = [1, 2, 3, 4, 5, 6, 7, 6, 8, 9, 2, 10];

console.log([...new Set(array)]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/* Convert to Boolean */
const isTrue = !0;
const isFalse = !!0;

/* Convert to Integer */
let int = '10';
int = +int;

/* Convert to String */
const val = 5 + '';

/* Convert float to int */
const floatToInt = 19.9 | 0;

/* Truncate an array */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.length = 5;

/* Last Item in araay */
arr.slice(-1)

/* Remove last digits */
let t = 1553 / 10 | 0;
// t = 155
