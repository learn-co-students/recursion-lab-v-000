// Code your solution here!

function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let substring = string.substring(1, string.length);
    printString(substring);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0]
  }
}

function isPalindrome(myString) {
  let l = myString.length;

  if (l < 2) {
    return true;
  } else if (myString[l - 1] === myString[0]) {
    return isPalindrome(myString.substring(1, l-1));
  } else {
    return false;
  }
}

function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, --index) : array[index]
}


function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray;
  } else {
    return Math.max(myArray.pop(), maxOf(myArray))
  }
}

function includesNumber(myArray, myNumber) {
  if (!myArray.length) {
    return false;
  } else if (myArray[0] === myNumber) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), myNumber);
  }
}
