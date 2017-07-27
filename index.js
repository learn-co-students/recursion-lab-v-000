// Code your solution here!

function printString(myString) {
  console.log(myString[0]);
  if (myString.length > 1) {
    let substring = myString.substring(1, myString.length)
    printString(substring)
  } else {
    return true
  }
}

function reverseString(myString) {
  if (myString.length > 1) {
    return reverseString(myString.substring(1)) + myString[0]
  } else {
    return myString
  }
}

function isPalindrome(myString) {
  if (myString.length > 1) {
    if (myString[0] === myString[myString.length-1]) {
      let substring = myString.substring(1, myString.length-1)
      isPalindrome(substring)
    } else {
      return false
    }
    return true
  }
}

function addUpTo(arr, i) {
  if (i > 0) {
    return addUpTo(arr, i-1) + arr[i]
  } else {
    return arr[i]
  }
}

function maxOf(arr) {
  if (arr.length > 1) {
    return Math.max(arr.pop(), maxOf(arr))
  } else {
    return arr[0]
  }
}

function includesNumber(arr, n) {
  if (arr.length > 1) {
    return arr[0] === n ? true : includesNumber(arr.slice(1), n)
  } else {
    return arr[0] === n
  }
}
