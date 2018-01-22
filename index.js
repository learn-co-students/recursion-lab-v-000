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

function reverseString(myString){
  if (myString === null || myString.length <= 1){
    return myString
  }
  return reverseString(myString.substring(1)) + myString[0]
}

function isPalindrome(myString) {
  if (myString.length === 0 || myString.length === 1) {
    return true;
  }
  if (myString.slice(0, 1) === myString.slice(-1)) {
    return isPalindrome(myString.slice(1, myString.length - 1));
  } else {
    return false;
  }
}

function addUpTo(arr, index) {
  if (index === 0) {
    return arr[0];
  }
  let newArr = arr;
  newArr[index - 1] = newArr[index] + newArr[index - 1];
  return addUpTo(newArr, index - 1);
}

function maxOf(intArr) {
  if (intArr.length === 1) {
    return intArr[0];
  }
  let newArr = intArr.slice(2);
  if (intArr[0] > intArr[1]) {
    newArr.unshift(intArr[0]);
    return maxOf(newArr);
  } else {
    newArr.unshift(intArr[1]);
    return maxOf(newArr);
  }
}

function includesNumber(myNumbers, target){
  if (myNumbers[0] === target){
    return true
  }
  if (myNumbers.length === 1){
    return false
  }

  return includesNumber(myNumbers.slice(1), target)
}