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

//Write out a recursive function to reverse a string.
function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

//Write out a recursive function to see if a word is a palindrome.
function isPalindrome(string) {
  const last = string.length - 1

  if (string[0] !== string[last]) {
    return false
  } else if (string.length > 1) {
    return isPalindrome(string.substring(1, last))
  } else {
    return true
  }
}

// Given an array and an index, write a recursive function to add up the elements of an array.
// bad and ugly and hacky! bad code! stanky!
// let sum = 0
// function addUpTo(array, idx) {
//   sum += array[0]
//   let myArray = array.splice(1, array.length)
//   if (idx > 0) {
//     return addUpTo(myArray, --idx)
//   } else {
//     let done = sum
//     sum = 0
//     return done
//   }
// }

//happy-medium refactoring:
function addUpTo(array, idx) {
  if (idx) {
    return array[idx] + addUpTo(array,--idx)
  } else {
    return array[idx]
  }
}

// solution code
// function addUpTo(myArray, index) {
//   return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
// }

//Write a recursive function to find the largest integer in an array.
 function maxOf(array) {
   if (array.length > 1) {
      if (array[0] >= array[1]) {
        array.splice(1,1)
        return maxOf(array)
      } else {
        return maxOf(array.slice(1))
      }
   } else {
     return array[0]
   }
 }

 // solution! bananas!
//  function maxOf(myArray) {
//   if (myArray.length === 1) {
//     return myArray[0];
//   } else {
//     return Math.max(myArray.pop(), maxOf(myArray));
//   }
// }
