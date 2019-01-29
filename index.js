// Code your solution here!
function printString(input){
  console.log(input[0])
  if (input.length > 1){
    let short = input.substring(1, input.length);
    printString(short);
  } else {
    return true;
  }
}

function reverseString(input){
  if (input.length < 2) {
    return input;
  } else {
    return reverseString(input.substring(1)) + input[0];
  }
}

function isPalindrome(input){
  if (input.length < 2) {
    return true;
  } else if (input[0]==input[input.length-1]){
    return isPalindrome(input.substring(1,input.length-1));
  } else {
    return false;
  }
}

function addUpTo(array, index){
  if (index) {
    return array[index] + addUpTo(array, --index);
  } else {
    return array[index];
  }
}

function maxOf(myArray){
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(myArray, myNumber){
  if (myArray.length == 0) {
    return false;
  } else if (myArray[0]==myNumber){
      return true;
  } else {
      return includesNumber(myArray.slice(1), myNumber)
  }
}
