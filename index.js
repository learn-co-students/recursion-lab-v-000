// Code your solution here!

function printString(str) {
  console.log(str[0]);
  if (str.length > 1) {
    printString(str.substring(1, str.length));
  } else {
    return true;
  }
}

function reverseString(str) {
  if (str.length < 2) {
    return str;
  } else {
    return reverseString(str.substring(1)) + str[0]
  }
}

function isPalindrome(str) {
  let l = str.length;
  if (str.length < 2) {
    return true;
  } else if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1))
  } else {
    return false;
  }
}

function addUpTo(arr, index) {
 return index ? arr[index] + addUpTo(arr, --index) : arr[index]
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0]
  } else {
    return Math.max(arr.pop(), maxOf(arr));
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



