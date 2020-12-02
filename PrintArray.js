//Write a function called `printArr` that will print the items of an array.

const printArr = (array) => {
	array.map((e) => console.log(e));
};

console.log(printArr([1, 2, 3, 4, 5]));
