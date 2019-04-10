// Code your solution here!
function printString(myString) {
  console.log(myString[0])

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length)
    printString(mySubString)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string.length > 1) {
    return reverseString(string.substring(1)) + string[0]
  } else {
    return string
  }
}

function isPalindrome(string) {
  if (string.length < 2) {
    return true
  }

  if (string.slice(0, 1) == string.slice(-1)) {
    return isPalindrome(string.slice(1, -1))
  }

  return false
}



function addUpTo(array, num) {
  if (num === 0) {
    return array[0]
  } else if (num > 0) {
    return array[0] + addUpTo(array.slice(1), num - 1)
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    if (array[0] < array[1]) {
      maxOf(array.slice(1))
    } else {
      array.splice(1, 1)
      maxOf(array)
    }
  }
}
