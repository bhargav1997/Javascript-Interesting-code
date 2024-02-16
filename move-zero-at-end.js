var moveZeroes = function (nums) {
   console.log('nums', nums);
   return nums.sort((a, b) => {
      if (a === 0 && b !== 0) {
         return 1; // Place zeros at the end
      } else if (a !== 0 && b === 0) {
         return -1; // Place non-zeros before zeros
      } else {
         return 0; // Maintain relative order of non-zero elements
      }
   });
};

let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums)); [1,3, 12, 0, 0]
