function printString(myString) {
  let mySubstring;
  console.log(myString[0]);
  if (myString.length > 1) {
    mySubstring = myString.substring(1, myString.length);
    printString(mySubstring);
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
 let l = myString.length;

 if (l < 2) {
   return true;
 } else if (myString[l - 1] === myString[0]) {
   return isPalindrome(myString.substring(1, l - 1));
 } else {
   return false;
 }
}

function addUpTo(arr, i) {
  return i ? arr[i] + addUpTo(arr, --i) : arr[i];
}

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(arr, num) {
  if (arr.length === 1 && arr[0] !== num) {
    return false;
  } else if (arr[0] === num) {
      return true;
  } else {
    arr = arr.slice(1);
    return includesNumber(arr, num);
  }
}
