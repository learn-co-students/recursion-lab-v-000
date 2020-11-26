// Code your solution here!
function printString(myString) {
  if (myString.length === 1) {
    console.log(myString[0])
  } else {
    console.log(myString[0]);
    printString(myString.substring(1, myString.length))
  }
}

function reverseString(myString) {
  if (myString.length === 1) {
    return myString[0];
  } else {
    return myString[myString.length - 1] + reverseString(myString.substring(0, myString.length - 1));
  }
}

function isPalindrome(myString) {
  // returns false or true
  if (myString.length < 2) {
    return true;
  } else if (myString[0] === myString[myString.length - 1]) {
    let substring = myString.substring(1, myString.length - 1);
    return isPalindrome(substring);
  } else {
    return false;
  }
}

function addUpTo(myArray, myIndex) {
  if (myIndex === 0) {
    return myArray[0];
  } else {
    let indexZero = [myArray[0] + myArray[1]];
    let subArray = myArray.slice(2, myArray.length);
    return addUpTo(indexZero.concat(subArray), myIndex - 1);
  }
}

function maxOf(myArray) {
  if (myArray.length < 2) {
    return myArray[0];
  } else {
    let newMax = myArray[0];
    if (myArray[1] > myArray[0]) {
      newMax = myArray[1];
    }
    let newArray = [newMax].concat(myArray.slice(2, myArray.length));
    return maxOf(newArray);
  }
}

function includesNumber(myArray, myNumber) {
  if (myArray.length > 0) {

    if (myArray[0] === myNumber) {
      return true;
    } else {
      return includesNumber(myArray.slice(1, myArray.length), myNumber);
    }

  } else {
    return false;
  }
}