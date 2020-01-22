function printString(string) {

  console.log(string[0]);

  let substring;

  substring = string.substring(1, string.length);

    if (substring.length > 0){
      printString(substring)  
    } else {
      return true;
    }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    debugger
    return reverseString(myString.substring(1)) + myString[0];
  }
}

function isPalindrome(myString) {
  let l = myString.length;

  if (l < 2) {
    return true;
  } else if (myString[l - 1] === myString[0]) {
    return isPalindrome(myString.substring(1, l - 1));
  } else {
    return false;
  }
}

function addUpTo(myArray, index) {
  return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}


// Bonus challenge: try to sort it and return first element without any built-in methods

function maxOf(myArray){
  if (myArray.length < 2) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray))
  }
}

function includesNumber(myArray, num){
  if (!myArray.length) {
    return false;
  } else if (myArray[0] === num){
    return true;
  } else {
    return includesNumber(myArray.slice(1), num);
  }
 }

 

 
