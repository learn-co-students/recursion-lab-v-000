function printString(str) {
  console.log(str[0])
  if (str.length === 1) {
    return
  } else {
    let subStr = str.substring(1);
    return printString(subStr);
  }
}

function reverseString(str) {
  if (str.length === 0) {
    return '';
  } else {
    let subStr = str.substring(1);
    return reverseString(subStr) + str[0];
  }
}

function isPalindrome(str) {
  const length = str.length
  const start = str[0];
  const end = str[length - 1]

  if (start !== end) {
    return false;
  } else if (str.length === 1) {
    return true;
  } else {
    let subStr = str.substring(1, length - 1);
    return isPalindrome(subStr);
  }
}

function addUpTo(arr, i) {
  return i === 0 ? arr[i] : addUpTo(arr, i - 1) + arr[i];
}

function maxOf(arr) {
  if (arr.length === 1) return arr[0];

  if (arr[0] > arr[1]) {
    arr.splice(1, 1)
    return maxOf(arr)
  } else {
    return maxOf(arr.splice(1))
  }
}

function includesNumber(arr, num) {
  if (arr.length === 0) return false;
  if (arr[0] === num) {
    return true;
  } else {
    return includesNumber(arr.slice(1), num);
  }
}