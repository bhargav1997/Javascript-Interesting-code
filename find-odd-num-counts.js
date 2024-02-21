/* 
  We can compute the count of odd numbers between the range [low, high] using a mathematical formula, 
  without iterating through each number. Here's how we can do it


  1. If both low and high are odd, then the count of odd numbers between them is (high - low) / 2 + 1.
  2. If both low and high are even, then the count of odd numbers between them is (high - low) / 2.
  3. If one of low and high is odd and the other is even, then the count of odd numbers between them is (high - low + 1) / 2.

  We can implement this logic in JavaScript:
*/

const countOdds = function(low, high) {
    // Check if both low and high are odd
    if (low % 2 !== 0 && high % 2 !== 0) {
        return Math.floor((high - low) / 2) + 1;
    }
    // Check if both low and high are even
    if (low % 2 === 0 && high % 2 === 0) {
        return Math.floor((high - low) / 2);
    }
    // Otherwise, one of low and high is odd and the other is even
    return Math.floor((high - low + 1) / 2);
};
