function solution1(nums) {
    if (!Array.isArray(nums)) throw new Error("Input must be an array");
    if (!nums.length) return 0;

    const dp = Array(nums.length + 1).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) dp[i] = Math.max(1 + dp[j], dp[i]);
        }
    }

    return Math.max(...dp);
}

module.exports = solution1;