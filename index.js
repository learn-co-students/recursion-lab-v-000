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
  return str.length > 1 ? reverseString(str.substring(1, str.length)) + str[0] : str[0];
}

function isPalindrome(str) {
  if (str.length > 1) {
    if (str[0] == str[str.length - 1]) {
      return isPalindrome(str.substring(1, str.length - 1));
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function addUpTo(arr, index) {
  return index > 0 ? addUpTo(arr, index - 1) + arr[index] : arr[0];
}

function maxOf(arr) {
  if (arr.length > 1) {
    if (arr[0] >= arr[arr.length - 1]) {
      return maxOf(arr.slice(0, arr.length - 1));
    } else {
      return maxOf(arr.slice(1, arr.length));
    }
  } else {
    return arr[0]
  }
}

function includesNumber(arr, num) {
  if (arr.length > 1) {
    if (arr[0] == num) {
      return true;
    } else {
      return includesNumber(arr.slice(1, arr.length), num)
    }
  } else {
    return false;
  }
}
