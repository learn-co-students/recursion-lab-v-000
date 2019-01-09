// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubstring = myString.substring(1, myString.length);
    printString(mySubstring);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string === "") {
    return string
  } else {
    return reverseString(string.substring(1)) + string[0]
  }
}

//reverseString("hello")
//reverseString("ello") + "h"
//reverseString("llo") + "eh"
//reverseString("lo") + "leh"
//reverseString("o") + "lleh"
//reverseString("") + "olleh"


function isPalindrome(string) {
  let middleCharacters = string.substr(1, string.length-2)

  if (string.length < 2) {
    return true
  } else {
    if (string[0] === string[string.length-1]) {
      isPalindrome(middleCharacters)
    } else {
      return false
    }
  }
  return true
}

function addUpTo(array, index) {
  if (index === 0) {
    return array[0]
  } else {
    return array[index] + addUpTo(array, --index)
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    if (array[0] > array[1]) {
      array.splice(1, 1)
      return maxOf(array)
    } else {
      array.shift()
      return maxOf(array)
    }
  }
}

function includesNumber(array, num) {
  if (array[0] === num) {
    return true
  } else if (array[0] !== num && array.length === 1) {
    return false
  } else if (array[0] !== num && array.length > 1) {
    array.shift()
    return includesNumber(array, num)
  }
}
