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
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    return reverseString(mySubString) + myString[0];
  } else {
    return myString;
  }
}

function isPalindrome(myString) {
  if (myString.length > 1) {
    if (myString[0] == myString[myString.length-1]) {
      let mySubString = myString.substring(1, myString.length-1);
      return isPalindrome(mySubString)
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function addUpTo(myArray, index) {
  if(index > 0){
    return addUpTo(myArray, index-1) + myArray[index]
  } else {
    return myArray[index]
  }
}

function maxOf(myArray) {
  if (myArray.length > 1) {
    if(myArray[0] > myArray[1]){
      myArray.splice(1,1)
      return maxOf(myArray)
    } else {
      myArray.shift()
      return maxOf(myArray)
    }
  } else {
    return myArray[0];
  }
}

function includesNumber(myArray, number) {
  if (myArray.length > 1) {
    if(myArray[0] == number){
      return true;
    } else {
      myArray.shift()
      return includesNumber(myArray, number)
    }
  } else if (myArray[0] == number) {
    return true;
  } else {
    return false;
  }
}
