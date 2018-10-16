function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}
printString("what is going on")

function reverseString(myString) {
  return (myString === '') ? '' : reverseString(myString.substr(1)) + myString.charAt(0);
}

function isPalindrome(str) {
  str = str.toLowerCase();
  var strLen = str.length;
     if (strLen === 0 || strLen === 1) {
         return true;
     }
     if (str[0] === str[strLen - 1]) {
         return isPalindrome( str.slice(1, strLen - 1) );
     }
     return false;
 };

 function addUpTo(myArray, index) {
   return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
};

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(myArray, myNumber) {
  if (!myArray.length) {
    return false;
  } else if (myArray[0] === myNumber) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), myNumber);
  }
}
