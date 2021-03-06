// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

// Constraints:

// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

const subArraySum = (nums, k) => {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		let sum = nums[i];
		if (sum == k) count++;
		for (let j = i + 1; j < nums.length; j++) {
			sum += nums[j];
			if (sum == k) count++;
		}
	}
	return count;
};

console.log(subArraySum([1, 2, 3], 3));

//// 1 - count 0
//// 1 + 2 - count 1
//// 1 + 3 - count 1
//// 2 - count 1
//// 2 + 3 - count 1
//// 3 - count 2
