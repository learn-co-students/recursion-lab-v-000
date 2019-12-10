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
  return str.length > 1 ? reverseString(str.substring(1, str.length)) + str[0] : str;
}

function isPalindrome(str) {
  let l = str.length;
  if (l > 1) {
    if (str[0] == str[l - 1]) {
      return isPalindrome(str.substring(1, l - 1));
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function addUpTo(arr, index) {
  return index ? addUpTo(arr, index - 1) + arr[index] : arr[0];
}

function maxOf(arr) {
  return arr.length == 1 ? arr[0] : Math.max(arr.pop(), maxOf(arr));
}

function includesNumber(arr, num) {
  if (!arr.length) {
    return false;
  } else if (arr[0] == num) {
    return true;
  } else {
    return includesNumber(arr.slice(1), num)
  }
}
