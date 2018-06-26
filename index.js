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
 
  let newString;
  if (myString.length > 1) {
    let newSubString = myString.substring(0, myString.length- 1)
    newString = myString[myString.length - 1] + reverseString(newSubString)
    return newString;
  } else {
    return myString
  }
}

function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  } else if (string[0] === string[string.length - 1]) {
    let newString = string.substring(1, string.length - 1)
    return isPalindrome(newString);
  } else {
    return false;
  } 
}

function addUpTo(array, index) {
  if (index > 0) {
     let sum = array[index] + addUpTo(array, index - 1);
     return sum;
  } else {
    return array[0]
  }
}
 
// function maxOf(array) {
//   if (array.length > 2) {
//     array[0] > array[1] ? array.splice(1, 1) : array.splice(0, 1);
//     return maxOf(array);
//   } else {
//     let answer;
//     array[0] > array[1] ?  answer = array[0] : answer = array[1];
//     return answer;
//   }
// }

function maxOf(array) {
  if (array.length > 1) {
    array[0] > array[1] ? array.splice(1, 1) : array.splice(0, 1);
    return maxOf(array);
  } else {
    return array[0]
  }
}

function includesNumber(array, element) {
  if (array[0] === element) {
    return true;
  } else if (array.length > 1) {
    return includesNumber(array.slice(1, array.length), element);
  } else {
    return false;
  }
}