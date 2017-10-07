// Code your solution here!

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
	if(myString.length > 0){
		return reverseString(myString.substring(1)) + myString.substring(0,1)
	} else {
		return myString.substring(0)
	}

}

function isPalindrome(myString) {
	if (myString.length > 1) {
		if (myString.substring(0,1) === myString.substring(myString.length-1))	{
			return isPalindrome(myString.substring(1,myString.length-1))
		} else {
			return false
		}

	} else {
		return true
	}
}

function addUpTo(array, index) {
	if (index > 0) {
		return addUpTo(array, index - 1) + array[index]
	} else { 
		return array[0]
	}
}

function maxOf(array) {
	if (array.length > 1) {
		if (array[1] > array[0]) {
			return maxOf(array.slice(1,array.length))
		} else {
			array[1] = array[0]
			return maxOf(array.slice(1,array.length))
		}
	} else {
		return array[0]
	}
}

function includesNumber(array, num) {
	if (array.length > 0) {
		if (array[0] === num) {
			return true
		} else {
			return includesNumber(array.slice(1,array.length),num)
		}

	} else {
		return false
	}
}

