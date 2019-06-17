// Code your solution here!

function addUpTo(array, index) {
  if(array.length === 1 || index === 0) {
    return array[0]
  } else if (array.length === 0) {
    return 0
  } else {
    return addUpTo(array.slice(1), index - 1) + array[0]
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    if (array[0] >= array[array.length - 1]) {
      array.pop()
      return maxOf(array)
    } else {
      array.shift()
      return maxOf(array)
    }
  }
}

function includesNumber(array, number) {
  if (!array.length) {
    return false
  } else if (array[0] === number) {
    return true
  } else {
    return includesNumber(array.slice(1), number)
  }
}

function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      return printString(mySubString);
    } else {
      return true;
    }
  }

  function reverseString(myString) {
    if (myString.length < 2) {
      return myString;
    } else {
      return reverseString(myString.substring(1)) + myString[0];
    }
  }

  function isPalindrome(myString) {
    if (myString.length > 1) {
      if (myString[0] === myString[myString.length - 1]) {
        if (myString.length === 2) {
          return true
        } else {
          let mySubString = myString.substring(1, myString.length -1);
          return isPalindrome(mySubString);
        }
      } else {
        return false
      }
    } else {
      return true
    }
  }