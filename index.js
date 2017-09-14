function printString(str) {
  console.log(str[0]);
 
  if (str.length > 1) {
    let subStr = str.substring(1, str.length);
    printString(subStr);
  } else {
    return true;
  }
}

function reverseString(str) {
  if (str.length < 2) {
    return str
  } else {
    return reverseString(str.substring(1)) + str[0]
  }
}

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  } else if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1))
  } else {
    return false
  }
}

function addUpTo(arr, i) {
  if (i) {
    return arr[i] + addUpTo(arr, --i)
  } else {
    return arr[i]
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
  if (arr.length) {
    if (arr[0] === num) {
      return true
    } else {
      return includesNumber(arr.slice(1), num)
    }
  }
  return false
}