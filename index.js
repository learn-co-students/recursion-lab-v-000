// Code your solution here!

function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    let subString =
    string.substring(1, string.length);
    printString(subString);
  } else {return true;
  }
}

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
}

function isPalindrome(myString) {
  let count = myString.length;

  if (count < 2) {
    return true;
  } else if (myString[count - 1] === myString[0]) {
    return isPalindrome(myString.substring(1, count - 1));
  } else {
    return false;
  }
}

function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, --index) : array[index]
}
