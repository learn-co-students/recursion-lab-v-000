var cart = [];

function printString(string) {
	console.log(string[0]);
	if (string.length > 1) {
		printString(string.substring(1, string.length));
	}
}

function addToCart(string) {
	cart.push(string);
}

function getCart() {
	return cart;
}

function reverseString(string) {
	if (string.length > 1) {
		string = string[string.length - 1] + reverseString(string.substring(0, string.length - 1));
	}
	return string;
}

function isPalindrome(string) {
	if (string.length > 1) {
		if (string[0] !== string[string.length - 1]) {
			return false;
		}
		return isPalindrome(string.substring(1, string.length - 1));
	}
	return true;
}

function addUpTo(array, index) {
	if (index === 0) {
		return array[0];
	}
	return array.shift() + addUpTo(array, --index);
}

function maxOf(array) {
	var lastElement,
		maxOfRest;

	if (array.length === 1) {
		return array[0];
	}

	lastElement = array.pop();
	maxOfRest = maxOf(array);

	return lastElement > maxOfRest ? lastElement : maxOfRest;
}

function includesNumber(array, num) {
	var firstElement = array.shift();
	if (firstElement === num) {
		return true;
	} else if (array.length === 0) {
		return false;
	}
	return includesNumber(array, num);
}