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
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

function isPalindrome(myString) {
  let length = myString.length;

  if (length < 2) {
    return true;
  } else if (myString[length - 1] === myString[0]) {
    return isPalindrome(myString.substring(1, length -1));
  } else {
    return false
  }
}

function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, --index) : array[index];
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array));
  }
}

function includesNumber(array, number) {
  if (!array.length) {
    return false;
  } else if (array[0] === number) {
    return true
  } else {
    return includesNumber(array.slice(1), number)
  }
}