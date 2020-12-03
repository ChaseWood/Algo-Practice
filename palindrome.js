// WRITE A FUNCTION TO CHECK IF A WORD IS A PLAINDROME

// LOOPS OVER STRING STORING IT BACKWARDS
// COMPARES IT TO INPUT THAT IS FORWARDS
// RETURNS TRUE OR FALSE

const isPalindrome = (string) => {
	var reverse = '';

	for (let i = string.length - 1; i >= 0; i--) {
		reverse += string[i];
	}
	console.log(reverse);
	if (reverse === string) {
		return true;
	} else return false;
};

console.log(isPalindrome('cigar? toss it in a can. it is so tragic'));
