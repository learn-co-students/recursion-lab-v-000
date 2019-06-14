// Apply the problem to a specific case (i.e., choose an example).
// Write out a function that solves that particular example.
// Reword that function so that it uses recursion, invoking itself.

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(str) {
  if (str.length < 2) {
    return str;
  } else {
    return reverseString(str.substring(1)) + str[0];
  }
}

function isPalindrome(str) {
  // hannah
  if (str.length < 2) {
    return true;
  } else if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1));
  } else {
    return false;
  }
}

// sums all members up to a given index in an array
function addUpTo(arr, n) {
  // [2, 5, 8, 1]
  if (n === 0) {
    return arr[0];
  } else {
    return arr[n] + addUpTo(arr, n - 1);
  }
}

// finds the largest integer in an array
function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr.pop(), maxOf(arr));
  }
}

// returns 'true' if the number is present in the array
function includesNumber(arr, num) {
  if (arr.length === 0) {
    return false;
  } else if (arr.shift() === num) {
    return true;
  } else {
    return includesNumber(arr, num);
  }
}
