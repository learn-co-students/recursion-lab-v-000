function printString(myString) {
  console.log(myString[0]);
  
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length)
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

function isPalindrome(myString) {
  let length = myString.length;
  
  if (length < 2) {
    return true
  } else if (myString[length - 1] === myString[0]) {
    return isPalindrome(myString.substring(1, length - 1));
  } else {
    return false
  }
}

function addUpTo(arr, index) {
  return index ? arr[index] + addUpTo(arr, --index) : arr[index];
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0]
  } else {
    return Math.max(arr.pop(), maxOf(arr))
  }
}

function includesNumber(arr, num) {
  if (!arr.length) {
    return false
  } else if (arr[0] === num) {
    return true
  } else {
    return includesNumber(arr.slice(1), num)
  }
} 