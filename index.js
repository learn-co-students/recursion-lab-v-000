function printString(myString) {
  console.log(myString[0])
  if (myString.length > 1) {
    let mySubstring = myString.substring(1, myString.length)
    printString(mySubstring)
  } else {
    return true
  }
}

function reverseString(myString) {
  if (myString.length > 1) {
    let char = myString.substring(myString.length - 1)
    return char + reverseString(myString.substring(0, myString.length - 1))
  } else {
    return myString
  }
}

function isPalindrome(myString) {
  if (myString.length < 2) {
    return true
  } else if (myString[0] === myString[myString.length - 1]) {
    return isPalindrome(myString.substring(1, myString.length - 1))
  } else {
    return false
  }
}

function addUpTo(array, i) {
  let total = 0
  if (i > 0) {
    total = array[i] + addUpTo(array, i - 1)
  } else {
    total += array[i]
  }
  return total
}

function maxOf(array) {
  if (array[0] <= array[1]) {
    return maxOf(array.slice(1))
  } else if (array[0] > array[1]) {
    return maxOf(array.slice(0, 1).concat(array.slice(2)))
  } else {
    return array[0]
  }
}

function includesNumber(array, n) {
  if (array[0] === n) {
    return true
  } else if (array.length > 1) {
    return includesNumber(array.slice(1), n)
  } else {
    return false
  }
}
