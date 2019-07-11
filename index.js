function printString(theString) {
  console.log(theString[0]);

  if (theString.length > 1) {
    const theSubString = theString.substring(1, theString.length);
    return printString(theSubString);
  } else {
    return true;
  }
}

function reverseString(theString) {
  if (theString.length > 1) {
    const theSubString = theString.substring(1, theString.length);
    return reverseString(theSubString) + theString[0];
  } else {
    return theString;
  }
}

function isPalindrome(theString) {
  if (theString.length > 1) {
    if (theString[0] === theString[theString.length - 1]) {
      const theSubString = theString.substring(1, theString.length - 1);
      return isPalindrome(theSubString);
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function addUpTo(theArray, index) {
  if (index > 0) {
    return theArray[index] + addUpTo(theArray, --index);
  } else {
    return theArray[index];
  }
}

function maxOf(theArray) {
  if (theArray.length > 1) {
    let theSubArray = theArray;
    if (theArray[0] > theArray[theArray.length - 1]) {
      theSubArray.pop();
    } else {
      theSubArray.shift();
    }
    return maxOf(theSubArray);
  } else {
    return theArray[0];
  }
}

function includesNumber(theArray, theNumber) {
  if (theArray.length > 0) {
    let theSubArray = theArray;
    if (theArray[0] === theNumber) {
      return true;
    } else {
      theSubArray.shift();
      return includesNumber(theSubArray, theNumber);
    }
  } else {
    return false;
  }
}
