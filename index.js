// Code your solution here!

function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let subStr = string.substring(1, string.length);
    printString(subStr)
  } else {
    return true
  }
}

function reverseString(string) {

  if (string.length > 0) {
    return string[string.length - 1] + reverseString(string.substring(0, string.length - 1))
  } else {
    return "";
  }
}

function isPalindrome(str) {

  if (str.length > 1) {
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.substring(1, str.length - 1))
    } else {
      return false
    }
  } else {
    return true;
  }
}

function addUpTo(ary, i) {
  if (i > 0) {
    return ary[i] + addUpTo(ary, i - 1)
  } else {
    return ary[0]
  }
}

function maxOf(ary) {
  if (ary.length > 1) {
    if (ary[0] > ary[1]) {
      return maxOf(ary.filter(num => num !== ary[1]))
    } else {
      return maxOf(ary.filter(num => num !== ary[0]))
    }
  } else {
    return ary[0]
  }
}

function includesNumber(ary, num) {
  if (ary.length > 0) {
    if (ary[0] === num) {
      return true;
    } else {
      return includesNumber(ary.slice(1, ary.length), num)
    }
  } else {
    return false;
  }
}
