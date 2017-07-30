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
  if (myString === "") {
    return "";
  } else {
    return myString[myString.length-1] + reverseString(myString.substring(0, myString.length - 1));
  }
}

function isPalindrome(myString) {
  if (myString.length <= 1) {
    return true
  }
  if (myString.charAt(0) != myString.charAt(myString.length-1)) {
    return false
  }
  return isPalindrome(myString.substr(1, myString.length-2))
}

function addUpTo(array, target) {
  if (target === 0) {
    return array[0]
  }
  if (target > 0) {
      return array[0] + addUpTo(array.slice(1, array.length), target-1)
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  }
  if (array[0] < array[1]) {
    array.splice(0,1)
  } else {
    array.splice(1,1)
  }
  return maxOf(array)
}

function includesNumber(array, number) {
  if (array.length === 1 && array[0] != number) {
    return false
  }
  if (array[0] === number) {
    return true
  } else {
    array.splice(0,1)
  }
  return includesNumber(array, number)
}
