/*
Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, 
but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using - lodash's _.chunk function.


Example 1:

Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.

*/

var chunk = function(arr, size) {
     // Initialize an empty array to store the chunks
    const chunks = [];
    
    // Iterate over the original array
    for (let i = 0; i < arr.length; i += size) {
        // Push a subarray of size 'size' into the 'chunks' array
        chunks.push(arr.slice(i, i + size));
    }
    
    // Return the array of chunks
    return chunks;
};

/* Or without using slice method */

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk2 = function (arr, size) {
    if(!arr.length) {
      return [];
  }
  if (arr.length < size) {
    return [arr];
  }
  
  const result = [];
  let subArray = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    subArray.push(element);
    if (subArray.length === size) {
      result.push(subArray);
      subArray = [];
    }
  }
  if (subArray.length) {
    result.push(subArray);
  }
  return result;
};

