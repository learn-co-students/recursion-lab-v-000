function printString (myString) {
	console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(str) {
	if (str.length == 1) {
		return str;
	} else {
		return str[str.length-1] + reverseString(str.substring(0, str.length-1));
	}
}

function isPalindrome(str) {
	if (str.length == 1) {
		return true;
	} else if (str.length == 2) {
		return str[0] == str[1] ? true : false;
	} else {
		if (str[0] == str[str.length-1]){
			return isPalindrome(str.substring(1, str.length-1))
		} else {
			return false;
		}
	}
}

function addUpTo(array, idx){
	if (idx == 0) {
		return array[0];
	} else {
		return array[idx] + addUpTo(array, idx-1);
	}
}

function maxOf (array){
	if (array.length == 1) {
		return array[0];
	} else {
		return Math.max(array[0], maxOf(array.slice(1)));
	}
}

function includesNumber(array, num){
	let l = array.length;
	if (l == 1) {
		return array[0] == num ? true : false;
	} else {
		return array[0] == num ? true : includesNumber(array.slice(1), num);
	}
}