// Code your solution here!

function printString (myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let subString = myString.substring(1, myString.length);
    printString(subString);
  } else {
    return true;
  }
}

//printString('pizza')
//printString("supercalifragilisticexpialidocious");

function reverseString(string) {
  if (string.length > 1) {
    return string.charAt(string.length - 1) + reverseString(string.substring(string.length - 1, 0))
  } else {
    return string
  }
}

function isPalindrome(string) {
  if (string.length <= 1) {
    return true
  } else if (string[string.length - 1] === string[0]) {
    return isPalindrome(string.substring(1, string.length - 1))
  } else {
    return false
  }
}
