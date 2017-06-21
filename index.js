// // Code your solution here!
// function printString(string) {
//   console.log(string[0])
//   if (string.length > 1) {
//     let substring = string.substring(1, string.length)
//     printString(substring)
//   } else {
//     return true
//   }
// }
//
// function reverseString(myString) {
//   if (myString.length < 2) {
//     return myString;
//   } else {
//     return reverseString(myString.substring(1)) + myString[0];
//   }
// }
//
// function isPalindrome(string) {
//   var reverseString = ""
//   for(let i = string.length-1; i >= 0; i--) {
//     reverseString += string[i]
//   }
//   if(string === reverseString) {
//     return true
//   } else {
//     return false
//   }
// }
//
// function addUpTo(array, n) {
//   let newArray = array.slice(0, n+1)
//   newArray = newArray.reduce((acc, val) => (
//     acc += val
//   ), 0)
//   return newArray
// }
//
// function maxOf(myArray) {
//   let value = myArray.reduce((acc, val) => (
//     acc < val ? acc = val : acc
//   ), 0)
//   return value
// }
//
// function includesNumber(array, n) {
//   for(let i=0; i<array.length; i++) {
//     if(array[i] === n) {
//       return true
//     }
//   }
//   return false
// }

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
  let l = myString.length;

  if (l < 2) {
    return true;
  } else if (myString[l - 1] === myString[0]) {
    return isPalindrome(myString.substring(1, l - 1));
  } else {
    return false;
  }
}

function addUpTo(myArray, index) {
  return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(myArray, myNumber) {
  if (!myArray.length) {
    return false;
  } else if (myArray[0] === myNumber) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), myNumber);
  }
}
