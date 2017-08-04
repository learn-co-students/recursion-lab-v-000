// Code your solution here!

function printString(myString) {

  if (myString.length === 1){
    console.log(myString[0]);
    return true;
  }
  else {
    console.log(myString[0]);
    printString(myString.slice(1));
  }

}

function reverseString(myString) {
  if (myString.length === 1){
    return myString;
  }
  else {
    return reverseString(myString.slice(1)) +  myString[0]
  }
}

function isPalindrome(myString) {
  if(myString.length <= 1){
    return true;
  }
  if(myString[0] === myString[myString.length - 1]){
    return isPalindrome(myString.slice(1, myString.length - 1));
  }
  else {
    return false;
  }
}

function addUpTo(array, index) {
  if(index === 0){
    return array[0];
  }
  else {
    return addUpTo(array.slice(1), index - 1) + array[0]
  }
}

function maxOf(array){
  if(array.length === 1){
    return array[0]
  }
  else {
    var a = maxOf(array.slice(1));
    if (a > array[0]) {
      return a;
    }
    else {
      return array[0];
    }
  }
}

function includesNumber(array, element){
  if(array[0] === element){
    return true;
  }
  else if (array.length === 1) {
    return (array[0] === element)
  }
  else {
    return includesNumber(array.slice(1), element)
  }
}
