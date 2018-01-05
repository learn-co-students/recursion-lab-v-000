function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

function isPalindrome(string) {
  if (string.length < 2) {
    return true;
  }
  if (string[string.length -1] === string[0]) {
    return isPalindrome(string.substring(1, string.length -1))
  } else {
    return false;
  }
}
