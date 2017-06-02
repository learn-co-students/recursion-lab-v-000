function printString(str) {
  console.log(str[0]);
  if (str.length > 1) {
    const substring = str.substring(1, str.length);
    printString(substring);
  } else {
    return true;
  }
}

function reverseString(str) {
  if (str.length > 1) {
    let last = str.length - 1;
    return str[last] + reverseString(str.substring(0, last));
  } else {
    return str;
  }
}

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    let substring = str.substring(1, str.length -1);
    return substring.length === 0 ? true : isPalindrome(substring);
  } else {
    return false;
  }
}

function addUpTo(array, index) {
  if (index === 0) {
    return array[0];
  } else {
    return array[index] + addUpTo(array, index - 1);
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    (array[0] < array[1]) ? array.splice(0,1) : array.splice(1,1);
    return maxOf(array);
  }
}

function includesNumber(array, value) {
  if (array.length === 0) {
    return false;
  } else if (array[0] === value) {
    debugger;
    return true;
  } else {
    return includesNumber(array.slice(1, array.length), value);
  }
}
