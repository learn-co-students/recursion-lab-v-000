import { reverse } from 'dns';

// Code your solution here!
function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    let substring = string;
    substring = substring.slice(1);
    printString(substring);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.slice(1)) + string[0];
  }
}

function isPalindrome(string) {
  if (string.length < 2) {
    return true;
  } else {
    if (string[0].toLowerCase() === string.slice(-1).toLowerCase()) {
      return isPalindrome(string.slice(1, -1));
    } else {
      return false;
    }
  }
}

function addUpTo(array, index) {
  let sum = array[index];
  if (index > 0) {
    return addUpTo(array, index - 1) + sum;
  }
  return sum;
}

function maxOf(array) {
  if (array.length > 1) {
    return Math.max(array.pop(), maxOf(array));
  }
  return array[0];
}

function includesNumber(array, number) {
  if (array.length) {
    return array[0] === number ? true : includesNumber(array.slice(1), number);
  }
  return false;
}
