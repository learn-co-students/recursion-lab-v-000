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

function reverseString(initialString) {
  if (initialString.length < 2) {
    return initialString;
  } else {
    return reverseString(initialString.substring(1)) + initialString[0]
  }
}

function isPalindrome(word) {
  if (word.length === 0 || word.length === 1) {
    return true
  } else if (word[0] === word[word.length - 1]) {
    return isPalindrome(word.substring(1, word.length - 1))
  } else {
    return false
  }
}

function addUpTo(array, index) {
  if (index > 0) {
    return array[index] + addUpTo(array, --index)
  } else {
    return array[index]
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}

function includesNumber(array, number) {
  if (array.length === 0) {
    return false;
  } else if (array[0] === number) {
    return true;
  } else {
    return includesNumber(array.slice(1), number);
  }
}
