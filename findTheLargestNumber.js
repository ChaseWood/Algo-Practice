// Write a function called `largestNumber` that will return the largest value from an array.
// input [1,2,5,10]
// output 10

// start at first item in array and check against others
// replace number in largest sum with

const largestNumber = (array) => {
	let largest = array[0];
	array.forEach((e) => {
		if (e > largest) {
			largest = e;
		}
	});
	return largest;
};

console.log(largestNumber([1, 2, 5, 10]));
