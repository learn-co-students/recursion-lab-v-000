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
    if (myString.length === 1) {
        return myString[0];
    } else {
        return myString[myString.length - 1] + reverseString(myString.substring(0, myString.length - 1));
    }
}

let counter = 0;
function isPalindrome(string) {
//    if (string[counter] === string[string.length-counter-1] && counter < string.length/2) {
//         counter++;
//         if (counter === Math.floor(string.length/2)) {
//             return true;
//         }
//         else {
//             return isPalindrome(string);
//         } 
//     }
//     else return false;
    if (string.length < 2) {
        return true;
    } else if (string[0] === string[string.length - 1]) {
        let substring = string.substring(1, string.length - 1);
        return isPalindrome(substring);
    } else {
        return false;
    }
}

function addUpTo(myArray, myIndex) {
    if (myIndex === 0) {
      return myArray[0];
    } else {
      let indexZero = [myArray[0] + myArray[1]];
      let subArray = myArray.slice(2, myArray.length);
      return addUpTo(indexZero.concat(subArray), myIndex - 1);
    }
  }
  
  function maxOf(myArray) {
    if (myArray.length < 2) {
      return myArray[0];
    } else {
      let newMax = myArray[0];
      if (myArray[1] > myArray[0]) {
        newMax = myArray[1];
      }
      let newArray = [newMax].concat(myArray.slice(2, myArray.length));
      return maxOf(newArray);
    }
  }
  
  function includesNumber(myArray, myNumber) {
    if (myArray.length > 0) {
  
      if (myArray[0] === myNumber) {
        return true;
      } else {
        return includesNumber(myArray.slice(1, myArray.length), myNumber);
      }
  
    } else {
      return false;
    }
  }