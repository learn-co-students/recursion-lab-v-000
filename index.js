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

function isPalindrome(myString) {
  let length = myString.length;
  if (length < 2) {
    return true;
  } else  if
    (myString.charAt(length-1) == myString[0]){
    return isPalindrome(myString.substring(1, length - 1));
  } else {
    return false;
  }
}

function addUpTo(array, index){
  if (index < 1){
    return array[index]
  } else {
    return array[index] + addUpTo(array, --index)
  }
}

function maxOf(array) {
  if (array.length < 2){
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}

function includesNumber(array, target){
  if (array[0] === target){
    return true
  } else if (!array.length){
    return false
  } else {
    let newArray = array.slice(1);
    return includesNumber(newArray, target)
  }
}

// {
//   if (!myArray.length){
//     return false
//   } else if(myArray[0] === target){
//     return true
//   } else {
//
//   }
// }
