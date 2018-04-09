function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length > 1) {
    let subString = string.slice(0, -1);
    return string[string.length -1] + reverseString(subString);
  } else {
    return string;
  }
}

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    let substr = str.slice(1,-1);
    return isPalindrome(substr);
  }
}

function addUpTo(array, idx) {
  return idx ? array[idx] + addUpTo(array, --idx) : array[idx];
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0]
  } else {
    return Math.max(arr.pop(), maxOf(arr))
  }
}

function includesNumber(array, num) {
  if (array[0] === num) {
    return true
  } else {
    return array[0] ? includesNumber(array.slice(1), num) : false
  }
}
