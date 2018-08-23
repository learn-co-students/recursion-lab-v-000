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


function reverseString(myString) {
  if (myString.length < 2) {
    console.log("less than 2:", myString)
    return myString;
  } else {
    console.log(myString)
    return reverseString(myString.substring(1)) + myString[0];
  }
}
// function reverseString(myString) {
  // Get the last letter
  // base case is here string.length === 0
  //
  // let newString = myString
  //
  //
  // if
  // "cat"
  // myString[myString.length-1] + myString[myString.length-2] + myString[myString.length-3]
// }

function isPalindrome(myString) {
  if (myString.length < 2) {
    return true
  }

  else if (myString[0] === myString[myString.length - 1]) {
    return isPalindrome(myString.substring(1, myString.length - 1))
  }

  else {
    return false
  }

}


function addUpTo(array, index) {
  if (index === 0) {
    return array[0]
  } else {
    return array[0] + addUpTo(array.slice(1), index -1)
  }
}

// function maxOf(array) {
//   if (array.length === 1) {
//     return array[0]
//   }
//   else if (array[0] > array[1]) {
//     maxOf(array[0].concat(array.slice(2)))
//   }
//   else if (array[1] > array[0]) {
//     maxOf(array[1].concat(array.slice(2)))
//   }
// }

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(arr, numb) {
  if (arr[0] === numb) {
    return true
  }
  else if (arr.length > 1) {
    return includesNumber(arr.slice(1), numb)
  }
  return false

}
