// Code your solution here!

function printString(myString) {
  if (myString.length > 1) {
    console.log(myString[0])
    printString(myString.substring(1));
  } else {
    console.log(myString)
  }
}

// Additional string challenges:

// Write out a recursive function to reverse a string.
function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}
// Write out a recursive function to see if a word is a palindrome.
function isPalindrome(myString) {
	if (myString.length < 2) {
		return;
    } else {
		if (myString[0] === myString[myString.length-1]) {
			isPalindrome(myString.substring(1, myString.length-1));
			return true;
		} else {
			return false;
		}
	}
}

// other method:
// function isPalindrome(myString) {
//   let l = myString.length;

//   if (l < 2) {
//     return true;
//   } else if (myString[l - 1] === myString[0]) {
//     return isPalindrome(myString.substring(1, l - 1));
//   } else {
//     return false;
//   }
// }

// Array challenges

// Given an array and an index, write a recursive function to add up the elements of an array.
function addUpTo(array, index) {
	if (index) {
		return array[index] + addUpTo(array, --index);
	} else {
		return array[index];
	}
}

// terse:
// function addUpTo(myArray, index) {
//   return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
// }

// Write a recursive function to find the largest integer in an array.
function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return Math.max(array.pop(), maxOf(array));
  }
}

// Write out a function to see if an array includes a given element.
function includesNumber(array, element) {
	if (array.length === 1) {
		return array[0] === element;
	} else {
		return array[0] === element ? true : includesNumber(array.slice(1), element);
	}
}

