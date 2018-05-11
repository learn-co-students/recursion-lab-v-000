function printString(myString) {
	let char = myString.slice(0,1);
		console.log(char);

	if(myString.length > 1) {
		
		printString(myString.slice(1));
	}
}

function reverseString (str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

function isPalindrome(myString) {
	if(myString.length === 1 || myString.length === 0) {
		
	} else if(myString[0] === myString[myString.length - 1]) {
		isPalindrome(myString.slice(1, myString.length - 1));
	} else {
		return false;
	}
	return true;
}

function addUpTo(array, index) {
	if(index > 0) {
		return addUpTo(array, index - 1) + array[index];;
	} else {
		return array[0];
	}
}

function maxOf(array) {
	if(array.length === 1) {
		return array[0];
	}
	if(array.length > 1) {
		if(array[0] < array[array.length - 1]) {
			array[0] = array[array.length - 1];
		}
		array.pop();
		maxOf(array);
	} 
	return array[0];
}

function includesNumber(array, number) {
	if(array.length > 1) {
		if(array[0] === number) {
			return true;
		}
		array.shift();
		return includesNumber(array, number) || false;
	} 
}