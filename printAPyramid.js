// Print A Pyramid
// Write a function called buildPyramid that given a number, creates a pyramid that is that number of rows.

// Input: pyramid(4)

// Output:

//             ^
//            ^^^
//           ^^^^^
//          ^^^^^^^

const buildPyramid = (rows) => {
	const symbol = '^';
	let symbolCount = 1;
	let spaceCount = rows - 1;
	let pyramid = '';
	for (let i = 0; i < rows; i++) {
		let str = '';
		for (let j = 0; j < spaceCount; j++) {
			str += ' ';
		}
		for (let k = 0; k < symbolCount; k++) {
			str += symbol;
		}
		spaceCount -= 1;
		symbolCount += 2;
		pyramid += `${str} \n`;
	}
	return pyramid;
};

console.log(buildPyramid(4));

const buildPyramid2 = (rows) => {
	for (let i = 1; i <= rows; i++) {
		let str = ' '.repeat(rows - i);

		let str2 = '^'.repeat(i * 2 - 1);

		console.log(str + str2 + str);
	}
};

console.log(buildPyramid2(4));
