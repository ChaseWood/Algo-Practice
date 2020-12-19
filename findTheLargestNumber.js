// Write a function called `largestNumber` that will return the largest value from an array.
// input [1,2,5,10]
// output 10

// start at first item in array and check against others
// replace number in largest sum with

const largestNumber = (array) => {
	let largest = 0;
	array.forEach((element) => {
		if (element > largest) {
			largest = element;
		}
	});
	return largest;
};

const largerNumber = (a) => {
	let large = a[0];
	for (let i = 0; i < a.length; i++) {
		if (a[i] > large) {
			large = a[i];
		}
	}
	return large;
};

console.log(largerNumber([1, 2, 5, 10]));
