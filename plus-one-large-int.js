/* Increment the large integer by one and return the resulting array of digits */

let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
var plusOne = function (digits) {
   let joinAr = BigInt(digits.join('').replaceAll(','))+1n;
    
   return joinAr.toString().split('');
};

console.log(plusOne(digits));
