// Code your solution here!

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

function isPalindrome(myString) {
  let l = myString.length;

    if (l < 2) {
      return true;
    } else if (myString[l - 1] === myString[0]) {
      return isPalindrome(myString.substring(1, l - 1));
    } else {
      return false;
    }
}

function addUpTo(numArr, target) {


  if (target) {
    return numArr[target] + addUpTo(numArr, --target);
  } else {
    return numArr[target];
  }
}

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(numArr, target) {
  let l = numArr.length;

    if (numArr[0] === target) {
      return true;
    } else if (numArr.length > 1) {
      numArr.shift()
      return includesNumber(numArr, target);
    } else {
      return false;
    }
}
