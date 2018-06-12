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
  if (myString.length > 1){
    let mySubString = myString.substring(0, myString.length - 1)
    return myString.slice(-1) + reverseString(mySubString)
  } else {
    return myString[0];
  }
}

function isPalindrome(myString) {
  if (myString.length % 2){
    if (myString.length > 1){
      if (myString[0] === myString.slice(-1)){
        let mySubString = myString.slice(1, myString.length - 1);
        if (isPalindrome(mySubString)){
          return true;
        };
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function addUpTo(myArray, index) {
  if (index > 0){
    return myArray[index] + addUpTo(myArray, index - 1);
  } else {
    return myArray[0];
  }
}

function maxOf(myArray) {
  if (myArray.length > 1){
    if (myArray[0] >= myArray[myArray.length - 1]){
      return maxOf(myArray.slice(0, myArray.length - 1))
    } else {
      return maxOf(myArray.slice(1, myArray.length))
    }
  } else {
    return myArray[0]
  }
}

function includesNumber(myArray, number) {
  if (myArray.length > 0) {
    if (myArray[0] === number){
      return true;
    } else {
      return includesNumber(myArray.slice(1, myArray.length), number)
    }
  } else {
    return false;
  }
}
