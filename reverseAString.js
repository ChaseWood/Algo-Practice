// THERE ARE A FEW DIFFERENT WAYS TO REVERSE A STRING...
// MAKING VARIABLES AND USING A FOR LOOP
// USING THE REVERSE METHOD

const reverse = (string) => {
	// THIS METHOD GOES FORWARD OVER THE STRING WITH A FOR LOOP
	const solution = [];
	const newString = string.split('');
	for (let i = 0; i < string.length; i++) {
		solution.unshift(newString[i]);
	}
	const newSolution = solution.join('');
	return newSolution;
	// THIS METHOD GOES BACKWARD WITH THE FOR LOOP
	// CONCATING TO A NEW STRING
	// var solution = '';
	// for (let i = string.length - 1; i >= 0; i--) {
	// 	solution += string[i];
	// }
	// return solution;
	// THIS METHOD USES THE ARRAY METHODS SPLIT, REVERSE AND JOIN
	// const solution = string.split('').reverse().join('');
	// return solution;
};

console.log(reverse('chase'));
