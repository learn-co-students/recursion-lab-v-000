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

function isPalindrome(myString) {
  const nonWords = /[W_]/g
  myString.toLowerCase().replace(nonWords, "")
  const length = myString.length
  for (var i = 0; i < length / 2; i++) {
    if (myString[i] !== myString[length - 1 - i]) {
      return false
    }
  }
  return true
}