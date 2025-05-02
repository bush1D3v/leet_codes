function twoSum(nums: number[], target: number): number[] | undefined {
    for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
        for (let secondIndex = 0; secondIndex < nums.length; secondIndex++) {
            if (firstIndex !== secondIndex) {
                if (nums[ firstIndex ] + nums[ secondIndex ] === target) {
                    return [ firstIndex, secondIndex ];
                }
            }
        }
    }
}
