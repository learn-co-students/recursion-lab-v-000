// Code your solution here!

function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let substring = string.substring(1, string.length);
    printString(substring);
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
  
}