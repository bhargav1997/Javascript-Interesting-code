/*
To merge the two sorted arrays nums1 and nums2 into nums1 itself, we can use a two-pointer approach:

Initialize two pointers, p1 and p2, to the end of nums1 and nums2 respectively.
Initialize a pointer p to the end of nums1.
Compare the elements at nums1[p1] and nums2[p2].
Move the larger element to the end of nums1 and decrement the respective pointer.
Repeat this process until p1 or p2 becomes less than 0.
If p2 is greater than or equal to 0, copy the remaining elements of nums2 to nums1.
Here's the JavaScript code to implement this approach:
*/
var merge = function(nums1, m, nums2, n) {
    var tmp1 = nums1;
    var tmp2 = nums2;
    tmp1 = nums1.splice(0, (nums1.length - nums2.length));
    var tmp = [...tmp1, ...tmp2];
    tmp = tmp.sort((a, b) => a - b);

    nums1.length = 0;
    tmp.forEach((i) => {
        nums1.push(i);
    })

    console.log(nums1);
};
