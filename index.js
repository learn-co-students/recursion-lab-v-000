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
    if (string.length < 2) {
      return string;
    } else {
      return reverseString(string.substring(1)) + string[0];
    }
  }

function isPalindrome(string) {

}

function addUpto(string) {

}

function maxOf(string) {

}

function includesNumber(string) {

}
