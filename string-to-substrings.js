/*
 Partition the string into substrings with unique characters 
 and return the minimum number of substrings
*/
function minPartitions(s) {
    const set = new Set();
    let partitions = 0;
    for (let char of s) {
        if (!set.has(char)) {
            set.add(char);
        } else {
            partitions++;
            set.clear();
            set.add(char);
        }
    }
    return partitions + 1;
}

// Example usage:
const s1 = "abacaba";
console.log(minPartitions(s1)); // Output: 4

const s2 = "ssssss";
console.log(minPartitions(s2)); // Output: 6
