// Code your solution here!
function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    let substring = string.substring(1, string.length)
    printString(substring)
  } else {
    return true
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
  var reverseString = ""
  for(let i = string.length-1; i >= 0; i--) {
    reverseString += string[i]
  }
  if(string === reverseString) {
    return true
  } else {
    return false
  }
}

function addUpTo(array, n) {

}
