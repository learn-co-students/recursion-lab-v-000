// Code your solution here!

function printString(myString) {
  console.log(myString[0])
  if (myString.length > 1) {
    return myString[0] + printString(myString.substring(1, myString.length));
  } else {
    return myString;
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

  if (myString.length > 1) {
    if (myString[0] === myString[myString.length - 1]) {
      return isPalindrome(myString.substring(1, myString.length - 1))
    } else {
      return false;
    }
  } else {
    return true;
  }
}


function addUpTo(arr, i) {
  if (i) {
    // console.log(i, arr[i])
    return (arr[i]) + addUpTo(arr, --i);
  } else {
    // console.log(i, arr[i])
    return arr[i];
  }
};


function maxOf(arr) {
  if (arr.length > 1) {
    console.log(arr);
    return Math.max(arr.pop(), maxOf(arr));
  } else {
    return arr[0];
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
