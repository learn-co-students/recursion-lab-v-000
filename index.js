// Code your solution here!

function printString(myString) {
  console.log(myString[0]);
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    return printString(mySubString)
  } else {
    return true
  }
};


function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
};

function isPalindrome(myString) {
  if (myString.length === 0 || myString.length === 1) {
    return true;
  } else if (myString[0] === myString[myString.length -1]) {
    return isPalindrome(myString.slice(1, myString.length -1))
  } else {
    return false;
  }
};

function addUpTo(arr, index) {
  if (index > 0) {
    return arr[index] + addUpTo(arr, index - 1);
  } else {
    return arr[index];
  }
};

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0]
  } else {
    return Math.max(arr.shift(), maxOf(arr))
  }
};

function includesNumber(arr, n) {
  if (arr.length === 0) {
    return false
  } else if (arr[0] === n) {
    return true
  } else {
    return includesNumber(arr.slice(1), n)
  }
};