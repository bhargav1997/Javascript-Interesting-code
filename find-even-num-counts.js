/*

To count the number of even integers between two given numbers low and high inclusively, we can use a similar approach as for counting odd numbers. Here's how we can do it:

1. If both low and high are even, then the count of even numbers between them is (high - low) / 2 + 1.
2. If both low and high are odd, then the count of even numbers between them is (high - low) / 2.
3. If one of low and high is even and the other is odd, then the count of even numbers between them is (high - low - 1) / 2 + 1.

We can implement this logic in JavaScript:
*/

const countEvens = function(low, high) {
    // Check if both low and high are even
    if (low % 2 === 0 && high % 2 === 0) {
        return Math.floor((high - low) / 2) + 1;
    }
    // Check if both low and high are odd
    if (low % 2 !== 0 && high % 2 !== 0) {
        return Math.floor((high - low) / 2);
    }
    // Otherwise, one of low and high is even and the other is odd
    return Math.floor((high - low - 1) / 2) + 1;
};
