// WRITE A FUNCTION TO CHECK IF A WORD IS A PLAINDROME

// LOOPS OVER STRING STORING IT BACKWARDS
// COMPARES IT TO INPUT THAT IS FORWARDS
// RETURNS TRUE OR FALSE

const isPalindrome = (string) => {
	let reverse = '';

	for (let i = string.length - 1; i >= 0; i--) {
		reverse += string[i];
	}
	if (reverse === string) {
		return true;
	} else return false;
};

console.log(isPalindrome('chase'));
