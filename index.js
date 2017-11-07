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
  if (myString.length > 0) {
    return myString[myString.length - 1] + reverseString(myString.substring (0, myString.length - 1));
  } else {
    return '';
  }
}

function isPalindrome(myString) {
  if (myString.length > 1) {
    if (myString[0] === myString[myString.length - 1]) {
      let mySubString = myString.substring(1, myString.length - 1);
      return isPalindrome(mySubString);
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function addUpTo(myArray, index) {
  if (index > 0) {
    return myArray[index] + addUpTo(myArray, index - 1);
  } else {
    return myArray[index];
  }
}

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(myArray, number) {
  if (myArray.length < 1) {
    return false;
  } else if (myArray[0] === number) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), number);
  }
}
