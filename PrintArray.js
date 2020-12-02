//Write a function called `printArr` that will print the items of an array.

// const printArr = (array) => {
// 	array.map((e) => console.log(e));
// };

const printArr = (array) => {
	newArr = '';
	for (let i = 0; i < array.length; i++) {
		newArr += `${array[i]},`;
	}
	return newArr;
};

console.log(printArr([1, 2, 3, 4, 5]));

// Questions?
// Is it possible that the array is empty? Should I account for this?
// Will the array contain nested arrays and should I print those?
// Should I console.log the characters or return a string with the characters?
