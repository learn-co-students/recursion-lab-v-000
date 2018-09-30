function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let subString = myString.substring(1, myString.length);
    printString(subString);
  } else {
    return true;
  }
}

function reverseString(string) {
  let reversedString = string[string.length - 1];

  if (string.length > 1) {
    let subString = string.substring(0, string.length - 1);
    return reversedString + reverseString(subString);
  } else {
    return reversedString;
  }
}

function isPalindrome(string) {
  let firstLetter = string[0];
  let lastLetter = string[string.length - 1];
  if (string.length > 1) {
    let substring = string.substring(1, string.length - 1);
    if (firstLetter === lastLetter) {
      return isPalindrome(substring);
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function addUpTo(array, index) {
  let number = array[index];
  if (index > 0) {
    return number + addUpTo(array, index - 1);
  } else {
    return number;
  }
}

function maxOf(array) {
  let firstNum = array[0];
  let otherNums = array.slice(1);
  if (array.length > 1) {
    if (firstNum > otherNums[0]) {
      return firstNum;
    } else {
      return maxOf(otherNums);
    }
  } else {
    return firstNum;
  }
}

function includesNumber(array, number) {
  let firstNum = array[0];
  if (array.length > 1) {
    if (number === firstNum) {
      return true;
    } else {
      let nextArray = array.slice(1);
      return includesNumber(nextArray, number);
    }
  } else {
    if (number === firstNum) {
      return true;
    } else {
      return false;
    }
  }
}
