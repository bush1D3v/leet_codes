// Do not return anything, modify nums in-place instead
function sortColors(nums: number[]): number[] {
    nums.forEach((value, idx) => {
        if (value < nums[ idx ]) {

        } else {

        }
    })
    return nums;
};

console.log(sortColors([ 2, 0, 2, 1, 1, 0 ])); // [0, 0, 1, 1, 2, 2]
