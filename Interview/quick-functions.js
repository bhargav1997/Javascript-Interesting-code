/* Generate a Random Color */
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

/* Shuffle an Array */
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

/* Generate a Secure Random Number */
const generateSecureRandomNumber = (length) => {
  const crypto = window.crypto || window.msCrypto;
  if (crypto) {
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    return Array.from(array).join('');
  } else {
    return 'Your browser does not support secure random number generation.';
  }
};

/* Check if a String is a Palindrome */
const isPalindrome = (str) => {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

/* Generate a Unique Identifier */
const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

/* Find the Intersection of Two Arrays */
const findIntersection = (arr1, arr2) => {
  return arr1.filter(value => arr2.includes(value));
};

/* Convert RGB to Hexadecimal */
const rgbToHex = (r, g, b) => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

/* Reverse Words in a String */
const reverseWords = (str) => {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
};

/* Generate a Random Password */
const generateRandomPassword = (length) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
};

/* Check if a Number is Prime */
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
};

/* Find the Mean of an Array */
const findMean = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
};

/* Check if a String is an Anagram */
const isAnagram = (str1, str2) => {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
};

/* Find the Longest Word in a Sentence */
const findLongestWord = (sentence) => {
  return sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
};

/* Check if a Year is a Leap Year */
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

/* Generate a Fibonacci Sequence */
const generateFibonacciSequence = (length) => {
  const sequence = [0, 1];
  for (let i = 2; i < length; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
};

/* Calculate the Factorial of a Number */
const calculateFactorial = (num) => {
  if (num === 0 || num === 1) return 1;
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

/* Convert Temperature from Celsius to Fahrenheit */
const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
};

/* Check if a String is a Pangram */
const isPangram = (str) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet.split('').every(letter => str.toLowerCase().includes(letter));
};

/* Find the Median of an Array */
const findMedian = (arr) => {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedArr.length / 2);
  if (sortedArr.length % 2 === 0) {
    return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
  } else {
    return sortedArr[middleIndex];
  }
};

/* Check if a Number is a Perfect Square */
const isPerfectSquare = (num) => {
  return Math.sqrt(num) % 1 === 0;
};

/* Generate a Random Sentence */
const generateRandomSentence = () => {
  const subjects = ['I', 'You', 'He', 'She', 'They'];
  const verbs = ['run', 'jump', 'eat', 'sleep', 'study'];
  const objects = ['apple', 'book', 'cat', 'dog', 'table'];
  const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomObject = objects[Math.floor(Math.random() * objects.length)];
  return `${randomSubject} ${randomVerb} ${randomObject}.`;
};

/* Check if a Number is a Power of Two */
const isPowerOfTwo = (num) => {
  return num !== 0 && (num & (num - 1)) === 0;
};

/* Generate a Random UUID */
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

/* Calculate the Distance between Two Points */
const calculateDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

/* Check if a String is a Palindromic Sentence */
const isPalindromicSentence = (sentence) => {
  const lettersOnly = sentence.toLowerCase().replace(/[^a-z]/g, '');
  return lettersOnly === lettersOnly.split('').reverse().join('');
};

/* Generate a Random Emoji */
const generateRandomEmoji = () => {
  const emojis = ['😊', '🎉', '🌟', '💡', '🔥', '🚀', '🌈', '❤️', '🍕', '🎶'];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

/* Convert a String to Title Case */
const toTitleCase = (str) => {
  return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
};

/* Check if a Year is a Palindrome Year */
const isPalindromeYear = (year) => {
  const yearString = year.toString();
  return yearString === yearString.split('').reverse().join('');
};

/* Reverse an Array in Groups */
const reverseInGroups = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(...arr.slice(i, i + size).reverse());
  }
  return result;
};

/* Example Usage */
const distance = calculateDistance(1, 2, 4, 6);
const palindromicSentenceCheck = isPalindromicSentence('A man, a plan, a canal, Panama!');
const randomEmoji = generateRandomEmoji();
const titleCaseString = toTitleCase('hello world');
const palindromeYearCheck = isPalindromeYear(2022);
const reversedGroups = reverseInGroups([1, 2, 3, 4, 5, 6, 7], 3);


/* Example Usage */
const median = findMedian([1, 3, 5, 7, 9]);
const perfectSquareCheck = isPerfectSquare(16);
const randomSentence = generateRandomSentence();
const powerOfTwoCheck = isPowerOfTwo(16);
const uuid = generateUUID();


/* Example Usage */
const longestWord = findLongestWord('The quick brown fox jumps over the lazy dog');
const leapYear = isLeapYear(2024);
const fibonacciSequence = generateFibonacciSequence(10);
const factorial = calculateFactorial(5);
const fahrenheit = celsiusToFahrenheit(25);
const pangramCheck = isPangram('The quick brown fox jumps over the lazy dog');



/* Example Usage */
const hexColor = rgbToHex(255, 0, 0);
const reversedString = reverseWords('Hello World');
const randomPassword = generateRandomPassword(8);
const checkPrime = isPrime(17);
const numbers = [1, 2, 3, 4, 5];
const mean = findMean(numbers);
const checkAnagram = isAnagram('listen', 'silent');


/* Example Usage */
const randomColor = generateRandomColor();
const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(originalArray);
const secureRandomNumber = generateSecureRandomNumber(5);
const checkPalindrome = isPalindrome('radar');
const uniqueId = generateUniqueId();
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const intersection = findIntersection(arr1, arr2);
