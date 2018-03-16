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

function reverseString(string) {
  return (string ? reverseString(string.substring(1)) + string.charAt(0) : string);
}

function isPalindrome(word){
  let length = word.length
  if (length <= 1) {
    return true
  }
  if (word[0] === word[word.length - 1]) {
    return isPalindrome(word.slice(1, word.length-1))
  } else {
    return false
  }
}

function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, --index) : array[index]
}

function maxOf(array) {
  if (array.length === 1){
    return array[0]
  } else {
    return Math.max(array.shift(), maxOf(array));
  }
}

function includesNumber(array, number){
  if (array[0] === number){
    return true
  } else if (array.length === 0) {
    return false
  } else {
    return includesNumber(array.slice(1), number);
  }
}
