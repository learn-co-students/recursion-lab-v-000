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
  if (myString.length > 1) {
    return reverseString(myString.substr(1)) + myString.charAt(0);
  } else {
    return myString;
  }
}

function isPalindrome(myString) {
  if (myString.length > 1) {
    let first = myString.charAt(0);
    let last = myString.charAt(myString.length - 1);
    if (first == last){
      return isPalindrome(myString.substr(1, myString.length - 2));
    }
    else {
      return false;
    }
  } else {
    return true;
  }
}

function addUpTo(array, i) {
  if (i) {
    return array[i] + addUpTo(array, i-1);
  } else {
    return array[i];
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return Math.max(array.pop(), maxOf(array));
  }
}

function includesNumber(array, i) {
  if (array.length === 0) {
    return false;
  } else if (array.shift() === i) {
  return true;
  } else {
    return includesNumber(array, i);
  }
}
