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

function isPalindrome() {
  
}