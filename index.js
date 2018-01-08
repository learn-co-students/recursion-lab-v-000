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
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

function isPalindrome(string) {
  if (string.length < 2) {
    return true;
  }
  if (string[string.length -1] === string[0]) {
    return isPalindrome(string.substring(1, string.length -1))
  } else {
    return false;
  }
}

// having a hard time with this one
function addUpTo(array, index) {
  if (index) {
    return array[index] + addUpTo(array, --index)
  } else {
    return array[index]
  }
}

function maxOf(array) {
  if (array.length == 1) {
    return array[0];
  } else {
    if (array[0] >= array[1]) {
      array.splice(1,1)
      return maxOf(array)
    } else if (array[0] < array[1]) {
      array.shift()
      return maxOf(array)
    }
  }
}

function includesNumber(array, element) {
  if (array.length != 0) {
    if (array[0] == element) {
      return true
    } else {
      array.shift()
      return includesNumber(array, element)
    }
  } else {
    return false
  }
}
