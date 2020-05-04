// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    const mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  };
}

function reverseString(myString) {
  if (myString.length > 0) {
    return reverseString(myString.substring(1)) + myString.charAt(0);
  } else {
    return myString;
  };
}

function isPalindrome(myString) {
  if (myString.length === 0 || myString.length === 1) {
    return true;
  } else if (myString[0] === myString[myString.length - 1]) {
    return isPalindrome(myString.slice(1, myString.length - 1));
  } else {
    return false;
  };
}

function addUpTo(myArray, index) {
  let sum = 0;
  if (index > 0) {
    sum = addUpTo(myArray, index - 1) + myArray[index];
  } else {
    return sum + myArray[index];
  };
  return sum;
}

function maxOf(myArray) {
  if (myArray.length > 1) {
    myArray[0] < myArray[1] ? myArray.splice(0, 1) : myArray.splice(1, 1);
    return maxOf(myArray);
  } else {
    return myArray[0];
  };
}

function includesNumber(myArray, num) {
  if (myArray.length > 1) {
    if (num === myArray[0]) {
      return true;
    } else {
      myArray.splice(0, 1);
      return includesNumber(myArray, num);
    };
  } else {
    return false;
  };
}
