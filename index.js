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
    if (string.length < 2) {
      return string;
    } else {
      return reverseString(string.substring(1)) + string[0];
    }
  }

function isPalindrome(string) {
  let length = string.length;
  if (length < 2){
    return true;
  } else if (string[0] === string[length - 1]) {
    return isPalindrome(string.substring(1, length - 1));
  } else {
    return false;
  }
}

function addUpTo(array, index) {
  return index ?
    array[index] +
    addUpTo(array, --index) :
    array[index];
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return Math.max(array.pop(), maxOf(array));
  }
}

function includesNumber(array, num) {
  if (!array.length) {
    return false;
  } else if (array[0] === num) {
    return true;
  } else {
    return includesNumber(array.slice(1), num);
  }
}
