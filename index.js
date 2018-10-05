// Code your solution here!
function printString(myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    }
}

function reverseString(myString) {

    if (myString === "") {
        return "";
    } else {
        return reverseString(myString.substr(1)) + myString[0];
    }
}

function isPalindrome(myString) {
    if (myString.length < 2) {
        return true;
    } else if (myString[0] === myString.substr(-1)) {
        return isPalindrome(myString.substring(1, myString.length-1));
    } else {
        return false;
    }
}

function addUpTo(myArray, index) {
    let mySubArray = myArray.slice(0, index+1);

    if (index > 0) {
        return addUpTo(mySubArray, index-1) + mySubArray[index];
    } else {
        return mySubArray[index];
    }
}

function maxOf(myArray) {
    if (myArray.length === 1) {
        return myArray[0];
    } else {
        return Math.max(myArray.pop(), maxOf(myArray));
    }
}

function includesNumber(myArray, myNumber) {
    if (!myArray.length) {
      return false;
    } else if (myArray[0] === myNumber) {
      return true;
    } else {
      return includesNumber(myArray.slice(1), myNumber);
    }
  }