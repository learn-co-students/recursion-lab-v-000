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
        return myString;
    } else {
        return reverseString(myString.substring(1)) + myString[0];
    }
}

function isPalindrome(myString) {
    let l = myString.length;

    if (l < 2) {
        return true;
    } else if ( myString[l - 1] === myString[0]) {
        return isPalindrome(myString.substring(1, l - 1))
    } else {
        return false;
    }
}

function addUpTo(arr, idx) {
    if (idx) {
        return arr[idx] + addUpTo(arr, --idx)
    } else {
        return arr[idx]
    }
}

function maxOf(arr) {
    if (arr.length === 1) {
        return arr[0]
    } else {
        return Math.max(arr.pop(), maxOf(arr))
    }
}

function includesNumber(myArray, num) {
    if (myArray[0] === num) {
        return true
    }
    else if (myArray.length > 0) {
        return includesNumber([...myArray.slice(1)], num)
    }
    else {
        return false
    }
}