// Code your solution here!
function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    let mySubString = string.substring(1, string.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
}

function isPalindrome(string) {
  let l = string.length;
  if (l < 2) {
    return true;
  } else if (string[l - 1] === string[0]) {
    return isPalindrome(string.substring(1, l - 1));
  } else {
    return false;
  }
}

//condition ? value-if-true : value-if-false
function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, --index) : array[index];
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return Math.max(array.pop(), maxOf(array));
  }
}

function includesNumber(array, number) {
  if (!array.length) {
    return false;
  } else if (array[0] === number) {
    return true;
  } else {
    return includesNumber(array.slice(1), number);
  }
}
