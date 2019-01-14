function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let mySubString = string.substring(1, string.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string === "") {
    return string;
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

function isPalindrome(string) {
  const stringLength = string.length;
  if (stringLength === 0 || stringLength === 1) {
    return true;
  }

  if (string[0] === string[stringLength - 1]) {
    return isPalindrome(string.slice(1, stringLength - 1));
  }

  return false;
}

function addUpTo(array, index) {
  if (index > 0) {
    return array[index] + addUpTo(array, --index);
  } else {
    return array[0];
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  }

  if (array[0] < array[1]) {
    array.splice(0, 1);
  } else {
    array.splice(1, 1);
  }

  return maxOf(array);
}

function includesNumber(array, number) {
  if (array[0] === number) {
    return true;
  } else if (array.length > 1) {
    array.splice(0, 1);
    return includesNumber(array, number);
  } else {
    return false;
  }
}
