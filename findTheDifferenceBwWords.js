var findTheDifference = function(s, t) {
   const freq = {};

   let diff = []
    
    // Count the frequency of characters in string t
    for (const char of t) {
        freq[char] = (freq[char] || 0) + 1;
    }

    console.log('freq[char]',freq);
    
    // Subtract the frequency of characters in string s
    for (const char of s) {
        freq[char]--;
    }
    
    // Find the character with a frequency of 1 in t
    for (const [char, count] of Object.entries(freq)) {
        if (count === 1) {
            diff.push(char);
        }
    }

    return diff;
};

console.log(findTheDifference('bhargav', 'bTHargav')); // ["T", "H"]
