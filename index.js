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
  if (myString.length === 1) {
    return myString;
  } else {
    return reverseString(myString.substr(1)) + myString.charAt(0);
  }
}

function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return isPalindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }
}

function addUpTo(array, index) {
  if (array.length === 1) {
    return array[0];
  } else {
    return addUpTo(array.slice(1, index + 1), index) + array[0];
  }
}

function maxOf(array) {
  if (array.length === 1) { 
    return array[0];
  }
  if (array[0] > array[1]) {
    array.splice(1, 1);
    return maxOf(array);
  } else if (array[1] > array[0]) {
    array.splice(0, 1);
    return maxOf(array);
  }
}

function includesNumber(array, n) {
  if (array.length === 1) {
    return (array[0] === n) ? true : false;
  }
  return (array[0] === n) ? true : includesNumber(array.slice(1), n);
}
