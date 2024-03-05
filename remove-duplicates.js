var removeDuplicates = function(nums) {
    let set = new Set();
    let i = 0;
    let count = 0;
    for (num of nums) {
        const found = set.has(num);
        if (found) continue;
        set.add(num);
        nums[i] = num;
        i++
        count++;
    }
    return count;
};

/*
  Input: nums = [0,0,1,1,1,2,2,3,3,4]
  Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
  Explanation: Your function should return k = 5,
  with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
*/
