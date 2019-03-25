// Code your solution here!

function printString(string) { // passes variable parameter
  console.log(string[0]); // outputs 0 index of string
  if (string.length > 1) { // as long as string length greater than 1
    let subString = // let second variable equal subString
    string.substring(1, string.length); // subString method returns part of string between 1 and string.length
    printString(subString); //prints subStr created above
  } else { return true; // base case
 }
}

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
}

function isPalindrome(myString) {
  let count = myString.length;

  if (count < 2) {
    return true;
  } else if (myString[count - 1] === myString[0]) {
    return isPalindrome(myString.substring(1, count - 1));
  } else {
    return false;
  }
}

function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, --index) : array[index]
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return Math.max(array.pop(), maxOf(array));
  }
}

function includesNumber(array, number) {
  if (!array.length) {
    return false;
  } else if (array[0] === number) {
    return true;
  } else {
    return includesNumber(array.slice(1), number)
  }
}
