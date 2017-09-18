// Code your solution here!

function printString(string) {
  let start = 0;

  if (string.length <= 1) {
    console.log(string);
    return;
  }

  console.log(string[0]);
  
  return printString(string.slice(start + 1));
}

function reverseString(string) {
  if (string.length < 1) {
    return string;
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1, string.length - 1))
  } else {
    return false;
  }
}

function addUpTo(array, n) {
  let newArray = array.slice(0, n + 1);

  if (newArray.length <= 1) {
    return newArray[0];
  }
  return addUpTo(newArray.slice(1), n) + newArray[0];
}

function maxOf(array) {
  if (array.length <= 1) {
    return array[0];
  }

  return Math.max(maxOf(array.slice(1)), array[0]);
}

function includesNumber(array, n) {
  if (array.length < 1) {
      return false;
  }

  if (array[0] === n) {
    return true;
  } else {
  return includesNumber(array.slice(1), n);
  }
}