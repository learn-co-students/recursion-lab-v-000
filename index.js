import { reverse } from "dns";

// Code your solution here!

function printString(myString) {
  console.log(myString[0])
  if (myString.length > 1) {
    let mySubstring = myString.substring(1, myString.length);
    printString(mySubstring)
  }
}

function reverseString(myString) {
  if (myString === '') {
    return "";
  } else {
    return reverseString(myString.substr(1)) + myString.charAt(0)
  }
}

function isPalindrome(str) {
  var str = str.toLowerCase();
  var strLength = str.length;
  if ([0, 1].includes(strLength)) {
    return true
  } else if (str[0] === str[strLength - 1]) {
    return isPalindrome(str.substr(1, strLength - 2))
  }
  return false
}

