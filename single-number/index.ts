function singleNumber(nums: number[]): number {
    return nums.reduce((result, num) => result ^ num, 0);
};
