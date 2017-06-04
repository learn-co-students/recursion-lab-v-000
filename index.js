function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    let substring = string.substring(1, string.length);
    printString(substring)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string.length > 1) {
    let last = string.length - 1;
    return string[last] + reverseString(string.substring(0, last));
  } else {
    return string;
  }
}

function isPalindrome(string) {
  if (string.length > 1) {
    let last = string.length - 1;
    if (string[0] !== string[last]) {
      return false;
    }
    return isPalindrome(string.substring(1, last));
  }
  return true;
}

function addUpTo(array, index) {
  if (index === 0) {
    return array[0];
  } else {
    return array[index] + addUpTo(array, index -1);
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    (array[0] < array[1] ? array.splice(0,1) : array.splice(1,1));
    return maxOf(array);
  }
}

function includesNumber(array, number) {
  if (array.length === 0) {
    return false
  }
  if (array[0] === number) {
    return true;
  } else {
    return includesNumber(array.slice(1), number);
  }
}