function printString(str) {
  console.log(str[0])

  if (str.length > 1) {
    printString(str.substring(1))
  } else {
    return true;
  }
}

function reverseString(str) {

  if (str.length > 1) {
    return str.substring(str.length - 1) + reverseString(str.substring(0, str.length - 1))
  } else {
    return str;
  }
}

function isPalindrome(str) {
  let l = str.length;

  if (l < 2) {
    return true;
  } else if (str[0] === str[l-1]) {
    return isPalindrome(str.substring(1, l-1));
  } else {
    return false;
  }
}

function addUpTo(arr, index) {
  if (index === 0) {
    return arr[0];
  } else {
    return arr[0] + addUpTo(arr.slice(1), --index)
  }
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr[0], maxOf(arr.slice(1)))
  }
}

function includesNumber(arr, num) {
  if (arr.length === 1) {
    return arr[0] === num;
  } else if (arr[0] === num) {
    return true;
  } else {
    return includesNumber(arr.slice(1), num)
  }
}
