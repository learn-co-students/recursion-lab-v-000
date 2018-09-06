function printString(myString) {
  console.log(myString[0])
  
  if (myString.length > 1) {
    let mySubstring = myString.substring(1, myString.length)
    printString(mySubstring)  
  } else {
    return true
  }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString
  } else {
    return reverseString(myString.substring(1)) + myString[0]
  }
}

function isPalindrome(myString) {
  let shortString = myString.toLowerCase().split(' ').join('')
  let stringLength = shortString.length;

  if (stringLength < 2) {
    return true;
  } else if (shortString[stringLength - 1] === shortString[0]) {
    return isPalindrome(shortString.substring(1, stringLength - 1));
  } else {
    return false;
  }
}

function addUpTo(myArray, index) {
  if (index > 0) {
    return myArray[index] + addUpTo(myArray, --index)
  } else {
    return myArray[index]
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
  if (myArray.length === 0) {
    return false;
  } else if (myArray[0] === myNumber) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), myNumber);
}
}