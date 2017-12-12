function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
	if (myString.length > 0) {
		return myString.substring(myString.length, myString.length - 1) + reverseString(myString.substring(0, myString.length - 1))
	} else {
		return myString;
	}
}

function isPalindrome(str) {
	if (str.length === 0 || str.length === 1) {
		return true;
	}

	if (str[0] === str[str.length - 1]) {
		return isPalindrome(str.slice(1, str.length - 1));
	}
	return false;
}

function addUpTo(arr, i) {
	if (i > 0) {
		return arr[0] + addUpTo(arr.slice(1), i - 1);
	} else {
		return arr[0];
	}
}

function maxOf(arr) {
	if (arr.length === 1) {
		return arr[0];
	} else {
		return Math.max(arr.pop(), maxOf(arr));
	}
}

function includesNumber(arr, num) {
	if (!arr.length) {
		return false;
	} else if (arr[0] === num) {
		return true;
	} else {
		return includesNumber(arr.slice(1), num);
	}
}