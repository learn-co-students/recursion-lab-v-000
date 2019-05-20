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
    let mySubString = string.substring(0, string.length-1);
    return string[string.length-1] += reverseString(mySubString)
  } else {
    return string;
  }
}

function isPalindrome(string) {
  if (string.length > 1) {
    let firstChar = string[0];
    let lastChar = string[string.length-1];
    if (firstChar === lastChar) {
      let mySubString = string.substring(1, string.length-1);
      return isPalindrome(mySubString);
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function addUpTo(array, index) {
  if (array.length >= 1 && index > 0) {
    let firstItem = array.shift();
    return firstItem + addUpTo(array, index - 1);
  } else if (array.length >= 1 && index === 0) {
    return array.shift();
  } else {
    return false;
  }
}

function maxOf(array) {

}

function includesNumber(num) {

}
