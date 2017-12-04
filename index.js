function printString(s) {
  console.log(s[0]);
  if (s.length > 1) {
    printString(s.substring(1));
  } else {
    return true;
  }
}

function reverseString(s) {
  if (s.length === 1) {
    return s;
  } else {
    return s[s.length - 1] + reverseString(s.substring(0, s.length - 1));
  }
}

function isPalindrome(s) {
  if (s.length <= 1) {
    return true;
  } else {
    return s[0] === s[s.length - 1] && isPalindrome(s.substring(1, s.length -1));
  }
}

function addUpTo(arr, idx) {
  if (!idx) {
    return arr[0];
  } else {
    return arr[0] + addUpTo(arr.slice(1), idx - 1);
  }
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr.pop(), maxOf(arr));
  }
}

function includesNumber(arr, num) {
  if (arr.length === 1) {
    return arr[0] === num;
  } else {
    return arr[0] === num ? true : includesNumber(arr.slice(1), num);
  }
}
