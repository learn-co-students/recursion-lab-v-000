// Code your solution here!
function reverseString(string) {
  if (string.length > 1) {
    let subString = string.substring(1, string.length);
    return reverseString(subString) + string[0];
  } else {
    return string;
  };
};

function isPalindrome(string) {
  if (string.length > 1 && string[0] === string[string.length-1]) {
    let subString = string.substring(1, string.length-1);
    return isPalindrome(subString);
  } else if (string.length > 1 && string[0] !== string[string.length-1]) {
    return false;
  } else {
    return true;
  };
};

function printString(string) {
  if (string.length > 1) {
    console.log(string[0]);
    printString(string.substring(1, string.length));
  } else {
    console.log(string);
  }
};

function addUpTo(array, index) {
  if (index > 0) {
    return addUpTo(array, index-1) + array[index];
  } else {
    return array[index];
  };
};

function maxOf(myArray) {
  console.log(myArray);
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  };
};

function includesNumber(array, number) {
  console.log(array);
  if (array.shift() === number) {
    return true
  } else if (!array.length) {
    return false
  } else {
    return includesNumber(array, number)
  };
};
