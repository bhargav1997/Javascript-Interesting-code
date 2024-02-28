// Code 1: Swapping variables without using a temporary variable
let a = 5, b = 10;
a = a + b;
b = a - b;
a = a - b;
console.log("a:", a, "b:", b); // Output: a: 10 b: 5

// Code 2: Reversing a string
const reverseString = str => str.split('').reverse().join('');
console.log(reverseString("hello")); // Output: olleh

// Code 3: Checking if a number is even or odd
const isEven = num => num % 2 === 0;
console.log(isEven(7)); // Output: false

// Code 4: Converting a string to uppercase
const toUpper = str => str.toUpperCase();
console.log(toUpper("hello")); // Output: HELLO

// Code 5: Generating a random number between 1 and 10
const randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

// Code 6: Flattening an array of arrays
const arr = [[1, 2], [3, 4], [5, 6]];
const flatArr = [].concat(...arr);
console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6]

// Code 7: Checking if a string contains a specific substring
const containsSubstring = (str, sub) => str.includes(sub);
console.log(containsSubstring("hello world", "world")); // Output: true

// Code 8: Repeating a string n times
const repeatString = (str, n) => str.repeat(n);
console.log(repeatString("hello", 3)); // Output: hellohellohello

// Code 9: Reversing an array
const reverseArray = arr => arr.reverse();
console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]

// Code 10: Removing duplicates from an array
const uniqueArray = arr => [...new Set(arr)];
console.log(uniqueArray([1, 2, 2, 3, 3])); // Output: [1, 2, 3]

// Code 11: Checking if a string is a palindrome
const isPalindrome = str => str === str.split('').reverse().join('');
console.log(isPalindrome("level")); // Output: true

// Code 12: Capitalizing the first letter of each word in a string
const capitalizeWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
console.log(capitalizeWords("hello world")); // Output: Hello World

// Code 13: Replacing all occurrences of a substring in a string
const replaceSubstring = (str, sub, replacement) => str.split(sub).join(replacement);
console.log(replaceSubstring("hello world", "world", "universe")); // Output: hello universe

// Code 14: Checking if a number is a prime number
const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
console.log(isPrime(7)); // Output: true

// Code 15: Finding the maximum number in an array
const maxNumber = arr => Math.max(...arr);
console.log(maxNumber([1, 5, 3, 9])); // Output: 9

// Code 16: Removing whitespace from the beginning and end of a string
const trimString = str => str.trim();
console.log(trimString("  hello world  ")); // Output: hello world

// Code 17: Sorting an array of numbers in ascending order
const sortArray = arr => arr.sort((a, b) => a - b);
console.log(sortArray([3, 1, 4, 2])); // Output: [1, 2, 3, 4]

// Code 18: Finding the factorial of a number
const factorial = num => {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
};
console.log(factorial(5)); // Output: 120

// Code 19: Checking if a string is empty
const isEmpty = str => str.trim() === '';
console.log(isEmpty("")); // Output: true

// Code 20: Generating an array of n random numbers
const generateRandomArray = n => Array.from({ length: n }, () => Math.floor(Math.random() * 100));
console.log(generateRandomArray(5)); // Output: [37, 62, 84, 16, 48]

// Code 21: Converting a string to title case
const toTitleCase = str => str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
console.log(toTitleCase("hello world")); // Output: Hello World

// Code 22: Checking if two arrays are equal
const arraysEqual = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // Output: true

// Code 23: Checking if a number is a perfect square
const isPerfectSquare = num => Number.isInteger(Math.sqrt(num));
console.log(isPerfectSquare(25)); // Output: true

// Code 24: Converting minutes to hours and minutes
const convertToHoursMinutes = minutes => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hours ${remainingMinutes} minutes`;
};
console.log(convertToHoursMinutes(135)); // Output: 2 hours 15 minutes

// Code 25: Replacing all spaces in a string with hyphens
const replaceSpaces = str => str.replace(/\s/g, '-');
console.log(replaceSpaces("hello world")); // Output: hello-world
